import { Records as FernRecords } from "../../api/resources/records/client/Client";
import { Flatfile } from "../..";
import * as core from "../../core";
import urlJoin from "url-join";
import { GetRecordsRequestOptions, JsonlRecord } from "./types";
import * as environments from "../../environments";
import * as errors from "../../errors";
import * as serializers from "../../serialization";
import { toRawResponse } from "../../core/fetcher/RawResponse";

interface RecordsOptions extends FernRecords.Options {}

export class RecordsV2 {
    private readonly options: RecordsOptions;

    constructor(options: RecordsOptions = {}) {
        this.options = options;
    }

    /**
     * Retrieve records from a sheet in the standard Flatfile format.
     *
     * This method fetches records and converts them to the expected RecordWithLinks format,
     * returning them wrapped in a GetRecordsResponse structure.
     *
     * @param sheetId - The ID of the sheet to retrieve records from
     * @param options - Optional request parameters for filtering, pagination, etc.
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns Promise that resolves to a GetRecordsResponse containing the formatted records
     *
     * @example
     * ```typescript
     * const response = await recordsV2.get('us_sh_123', {
     *   pageSize: 100,
     *   includeMessages: true
     * });
     * console.log(response.data.records);
     * ```
     */
    public async get(
        sheetId: Flatfile.SheetId,
        options: GetRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions,
    ): Promise<Flatfile.GetRecordsResponse> {
        // Use getRaw to fetch the JSONL records
        const rawRecords = await this.getRaw(sheetId, options, requestOptions);

        // Convert each JSONL record to the expected format
        const records: Flatfile.RecordWithLinks[] = rawRecords.map((record) => this._convertStreamedRecord(record));

        // Build and return the GetRecordsResponse structure
        const response: Flatfile.GetRecordsResponse = {
            data: {
                records,
                success: true,
                // Note: counts, versionId, and commitId are not available from the raw JSONL endpoint
                // These would need to be populated if the endpoint provides this information
            },
        };

        return response;
    }

    /**
     * Stream records from a sheet in the standard Flatfile format.
     *
     * This method provides an async generator that yields RecordWithLinks objects
     * as they are received from the server, allowing for memory-efficient processing
     * of large datasets.
     *
     * @param sheetId - The ID of the sheet to retrieve records from
     * @param options - Optional request parameters for filtering, pagination, etc.
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns AsyncGenerator that yields RecordWithLinks objects
     *
     * @example
     * ```typescript
     * for await (const record of recordsV2.getStreaming('us_sh_123', {
     *   includeMessages: true
     * })) {
     *   console.log(`Record ${record.id}:`, record.values);
     *   // Process each record as it streams in
     * }
     * ```
     */
    public async *getStreaming(
        sheetId: Flatfile.SheetId,
        options: GetRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): AsyncGenerator<Flatfile.RecordWithLinks, void, unknown> {
        // Use getRawStreaming to get the JSONL records as they stream in
        for await (const rawRecord of this.getRawStreaming(sheetId, options, requestOptions)) {
            // Convert each JSONL record to the expected format and yield it
            yield this._convertStreamedRecord(rawRecord);
        }
    }

    /**
     * Retrieve records from a sheet in raw JSONL format.
     *
     * This method fetches all records at once and returns them as an array of
     * JsonlRecord objects, which contain the raw data structure from the API
     * including special fields like __k (record ID), __v (version), etc.
     *
     * @param sheetId - The ID of the sheet to retrieve records from
     * @param options - Optional request parameters for filtering, pagination, etc.
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns Promise that resolves to an array of JsonlRecord objects
     *
     * @example
     * ```typescript
     * const rawRecords = await recordsV2.getRaw('us_sh_123', {
     *   fields: ['firstName', 'lastName'],
     *   pageSize: 1000
     * });
     * rawRecords.forEach(record => {
     *   console.log(`Record ID: ${record.__k}`);
     *   console.log(`Field values:`, record);
     * });
     * ```
     */
    public async getRaw(
        sheetId: Flatfile.SheetId,
        options: GetRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions,
    ): Promise<JsonlRecord[]> {
        const url = await this._buildUrl(`/v2-alpha/records.jsonl`);

        // Add sheetId and options as query parameters
        const queryParams = this._buildQueryParams({ ...options, sheetId });
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        const headers = await this._prepareHeaders(requestOptions);
        const response = await this._executeRequest(url.toString(), "GET", {
            headers,
            requestOptions,
        });

        // Parse the JSONL response into an array of records
        const text = await response.text();
        return this._parseJsonlText(text);
    }

    /**
     * Stream records from a sheet in raw JSONL format.
     *
     * This method provides an async generator that yields JsonlRecord objects
     * as they are received from the server. This is the most memory-efficient
     * way to process large datasets as records are yielded individually rather
     * than loading all records into memory at once.
     *
     * @param sheetId - The ID of the sheet to retrieve records from
     * @param options - Optional request parameters for filtering, pagination, etc.
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns AsyncGenerator that yields JsonlRecord objects
     *
     * @example
     * ```typescript
     * for await (const rawRecord of recordsV2.getRawStreaming('us_sh_123', {
     *   includeTimestamps: true
     * })) {
     *   console.log(`Record ID: ${rawRecord.__k}`);
     *   console.log(`Updated at: ${rawRecord.__u}`);
     *   // Process each record as it streams in
     * }
     * ```
     */
    public async *getRawStreaming(
        sheetId: Flatfile.SheetId,
        options: GetRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): AsyncGenerator<JsonlRecord, void, unknown> {
        const url = await this._buildUrl(`/v2-alpha/records.jsonl`);

        // Add sheetId and options as query parameters
        const queryParams = this._buildQueryParams({ ...options, sheetId });
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        const headers = await this._prepareHeaders(requestOptions);
        const response = await this._executeRequest(url.toString(), "GET", {
            headers,
            requestOptions,
        });

        // Check if ReadableStream streaming is supported
        if (response.body && typeof response.body.getReader === "function") {
            // Use streaming approach for supported browsers
            yield* this._streamJsonlResponse(response);
        } else {
            // Final fallback for browsers without streaming support
            yield* this._fallbackJsonlResponse(response);
        }
    }

    /**
     * Stream JSONL response using ReadableStream (modern browsers)
     */
    private async *_streamJsonlResponse(response: Response): AsyncGenerator<JsonlRecord, void, unknown> {
        if (!response.body) {
            throw new errors.FlatfileError({
                message: "Response body is null",
                rawResponse: undefined,
            });
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        try {
            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    // Process any remaining data in buffer
                    if (buffer.trim()) {
                        try {
                            yield JSON.parse(buffer.trim()) as JsonlRecord;
                        } catch (error) {
                            // Skip malformed final line
                            console.warn("Failed to parse final JSONL line:", buffer.trim());
                        }
                    }
                    break;
                }

                // Decode chunk and add to buffer
                buffer += decoder.decode(value, { stream: true });

                // Process complete lines
                const lines = buffer.split("\n");
                buffer = lines.pop() || ""; // Keep incomplete line in buffer

                for (const line of lines) {
                    const trimmedLine = line.trim();
                    if (trimmedLine) {
                        try {
                            yield JSON.parse(trimmedLine) as JsonlRecord;
                        } catch (error) {
                            // Skip malformed line but continue streaming
                            console.warn("Failed to parse JSONL line:", trimmedLine);
                        }
                    }
                }
            }
        } finally {
            reader.releaseLock();
        }
    }

    /**
     * Parse JSONL text into an array of JsonlRecord objects
     */
    private _parseJsonlText(text: string): JsonlRecord[] {
        const lines = text.split("\n");
        const records: JsonlRecord[] = [];

        for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine) {
                try {
                    records.push(JSON.parse(trimmedLine) as JsonlRecord);
                } catch (error) {
                    console.warn("Failed to parse JSONL line:", trimmedLine);
                }
            }
        }

        return records;
    }

    /**
     * Fallback JSONL processing for browsers without streaming support
     */
    private async *_fallbackJsonlResponse(response: Response): AsyncGenerator<JsonlRecord, void, unknown> {
        const text = await response.text();
        const records = this._parseJsonlText(text);

        for (const record of records) {
            yield record;
        }
    }

    private async _prepareHeaders(
        requestOptions?: FernRecords.RequestOptions,
        contentType: string = "application/json",
    ): Promise<Record<string, string>> {
        const authHeader = await this._getAuthorizationHeader();
        const headers: Record<string, string> = {
            "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this.options?.xDisableHooks ?? "true",
            "X-Fern-Language": "JavaScript",
            "X-Fern-Runtime": core.RUNTIME.type ?? "node",
            "X-Fern-Runtime-Version": core.RUNTIME.version ?? "unknown",
            "Content-Type": contentType,
            ...requestOptions?.headers,
        };

        // Only add Authorization header if we have a token
        if (authHeader) {
            headers.Authorization = authHeader;
        }

        return headers;
    }

    /**
     * Get authorization header from options
     */
    private async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }
        return undefined;
    }

    /**
     * Build full URL from path
     */
    private async _buildUrl(path: string): Promise<URL> {
        let baseUrl =
            (await core.Supplier.get(this.options.baseUrl)) ??
            (await core.Supplier.get(this.options.environment)) ??
            environments.FlatfileEnvironment.Production;

        // Special handling for v2-alpha endpoints - remove /v1 suffix if present
        if (path.startsWith("/v2-alpha") && baseUrl.endsWith("/v1")) {
            baseUrl = baseUrl.slice(0, -3);
        }

        return new URL(urlJoin(baseUrl, path));
    }

    /**
     * Build query parameters string from options object
     */
    private _buildQueryParams(params: Record<string, any>): string {
        const searchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                if (Array.isArray(value)) {
                    // Handle array values (like fields)
                    value.forEach((item) => {
                        if (item !== undefined && item !== null) {
                            searchParams.append(key, String(item));
                        }
                    });
                } else {
                    searchParams.append(key, String(value));
                }
            }
        }

        return searchParams.toString();
    }

    /**
     * Execute HTTP request with retry logic and timeout handling
     */
    private async _executeRequest(
        url: string,
        method: string,
        options: {
            body?: string | Uint8Array;
            contentType?: string;
            headers?: Record<string, string>;
            requestOptions?: FernRecords.RequestOptions;
        } = {},
    ): Promise<Response> {
        const { body, contentType = "application/json", headers: directHeaders, requestOptions } = options;

        // Prepare headers - merge direct headers with those from requestOptions
        const preparedHeaders = await this._prepareHeaders(requestOptions, contentType);
        const finalHeaders = { ...preparedHeaders, ...directHeaders };

        // Setup timeout and retry configuration
        const timeoutMs = requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000;
        const maxRetries = requestOptions?.maxRetries ?? 0;

        let lastError: Error | null = null;

        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            const controller = new AbortController();
            let timeoutId: NodeJS.Timeout | null = null;

            try {
                // Setup external abort signal forwarding
                if (requestOptions?.abortSignal) {
                    requestOptions.abortSignal.addEventListener("abort", () => controller.abort());
                }

                // Setup timeout
                if (timeoutMs > 0) {
                    timeoutId = setTimeout(() => controller.abort(), timeoutMs);
                }

                const response = await fetch(url, {
                    method,
                    headers: finalHeaders,
                    body,
                    signal: controller.signal,
                });

                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // Handle non-success status codes by throwing appropriate errors
                if (!response.ok) {
                    const errorBody = await this._parseErrorBody(response);
                    this._throwErrorForStatus(response.status, errorBody, response);
                }

                return response;
            } catch (error) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // Handle abort/timeout
                if (error instanceof Error && error.name === "AbortError") {
                    throw new errors.FlatfileTimeoutError(`Timeout exceeded when calling ${method} ${url}.`);
                }

                // If this is already a Flatfile error, rethrow it
                if (error instanceof errors.FlatfileError || error instanceof errors.FlatfileTimeoutError) {
                    throw error;
                }

                lastError = error as Error;

                // If we've exhausted retries, throw the last error
                if (attempt === maxRetries) {
                    throw new errors.FlatfileError({
                        message: lastError.message,
                        rawResponse: undefined,
                    });
                }

                // Wait before retry (exponential backoff)
                if (attempt < maxRetries) {
                    await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                }
            }
        }

        // This should never be reached, but just in case
        throw new errors.FlatfileError({
            message: lastError?.message ?? "Unknown error occurred",
            rawResponse: undefined,
        });
    }

    /**
     * Parse error body from response
     */
    private async _parseErrorBody(response: Response): Promise<any> {
        try {
            const text = await response.text();
            return text ? JSON.parse(text) : {};
        } catch {
            return {};
        }
    }

    /**
     * Throw appropriate error based on HTTP status code
     */
    private _throwErrorForStatus(status: number, errorBody: any, response: Response): never {
        const rawResponse = toRawResponse(response);

        switch (status) {
            case 400:
                throw new Flatfile.BadRequestError(
                    serializers.Errors.parseOrThrow(errorBody, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    rawResponse,
                );
            case 404:
                throw new Flatfile.NotFoundError(
                    serializers.Errors.parseOrThrow(errorBody, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    }),
                    rawResponse,
                );
            default:
                throw new errors.FlatfileError({
                    statusCode: status,
                    body: errorBody,
                    rawResponse: rawResponse,
                });
        }
    }

    /**
     * Convert a streamed record to the expected record format
     */
    private _convertStreamedRecord(streamedRecord: JsonlRecord): Flatfile.RecordWithLinks {
        const { __k, __v, __s, __n, __c, __m, __i, __d, __e, __l, __u, ...fieldValues } = streamedRecord;

        // Convert field values to expected format
        const values: Flatfile.RecordDataWithLinks = {};

        Object.entries(fieldValues).forEach(([fieldKey, fieldValue]) => {
            // Skip special keys that might have been missed
            if (fieldKey.startsWith("__")) {
                return;
            }

            const cellValue: Flatfile.CellValueWithLinks = {
                value: fieldValue,
                valid: true, // Default to valid, will be overridden by messages if present
                messages: [],
            };

            // Add messages if present for this field
            if (__i && __i[fieldKey]) {
                cellValue.messages = Array.isArray(__i[fieldKey]) ? __i[fieldKey] : [__i[fieldKey]];
                cellValue.valid = cellValue.messages.length === 0;
            }

            values[fieldKey] = cellValue;
        });

        // Build the record
        const record: Flatfile.RecordWithLinks = {
            id: __k as Flatfile.RecordId,
            values,
            valid: __e ?? true,
            metadata: __m || {},
            config: __c || {},
        };

        // Add record-level timestamp if present (when includeTimestamps=true)
        if (__u) {
            try {
                (record as any).updatedAt = new Date(__u);
            } catch {
                // If timestamp parsing fails, include as string
                (record as any).updatedAt = __u;
            }
        }

        // Add deprecated versionId for backward compatibility
        if (__v) {
            (record as any).versionId = __v;
            (record as any).commitId = __v;
        }

        // Add messages at record level (deprecated but might be expected)
        if (__i && typeof __i === "object") {
            const recordMessages: Flatfile.ValidationMessage[] = [];
            Object.values(__i).forEach((fieldMessages: any) => {
                if (Array.isArray(fieldMessages)) {
                    recordMessages.push(...fieldMessages);
                } else if (fieldMessages) {
                    recordMessages.push(fieldMessages);
                }
            });
            if (recordMessages.length > 0) {
                record.messages = recordMessages;
            }
        }

        return record;
    }
}

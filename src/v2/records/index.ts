import { Records as FernRecords } from "../../api/resources/records/client/Client";
import { Flatfile } from "../..";
import * as core from "../../core";
import urlJoin from "url-join";
import {
    GetRecordsRequestOptions,
    JsonlRecord,
    WriteRecordsRequestOptions,
    WriteRecordsResponse,
    WriteStreamingOptions,
} from "./types";
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

    /**
     * Write records to a sheet in raw JSONL format.
     *
     * This method takes an array of JsonlRecord objects and writes them to the specified sheet.
     * Records can be inserts (no __k field) or updates (with __k field for existing record ID).
     * Supports various write options like truncate, snapshot, and sheet targeting.
     *
     * @param records - Array of JsonlRecord objects to write
     * @param options - Write configuration options
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns Promise that resolves to WriteRecordsResponse with operation results
     *
     * @example
     * ```typescript
     * const records: JsonlRecord[] = [
     *   { firstName: 'John', lastName: 'Doe', __s: 'us_sh_123' },
     *   { __k: 'us_rc_456', firstName: 'Jane', lastName: 'Smith' }  // Update existing
     * ];
     * const result = await recordsV2.writeRaw(records, {
     *   sheetId: 'us_sh_123',
     *   truncate: false
     * });
     * console.log(`Created: ${result.created}, Updated: ${result.updated}`);
     * ```
     */
    public async writeRaw(
        records: JsonlRecord[],
        options: WriteRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        const url = await this._buildUrl(`/v2-alpha/records.jsonl`);

        // For write operations, ensure all records have the sheet ID set if provided in options
        const enrichedRecords = records.map((record) => {
            // Always ensure sheet ID is present when provided in options
            if (options.sheetId) {
                return { __s: options.sheetId, ...record };
            }
            return record;
        });

        // Add options as query parameters, excluding sheetId since it's in the record body
        const { sheetId: _, ...queryOptions } = options;
        const queryParams = this._buildQueryParams(queryOptions, false); // Write operation
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        // Convert records to JSONL format (one record per line)
        const jsonlBody = enrichedRecords.map((record) => JSON.stringify(record)).join("\n");

        const headers = await this._prepareHeaders(requestOptions, "application/jsonl");

        // Add sheet ID header if provided in options and not already in records
        if (options.sheetId) {
            headers["X-Sheet-Id"] = options.sheetId;
        }

        const response = await this._executeRequest(url.toString(), "POST", {
            body: jsonlBody,
            contentType: "application/jsonl",
            headers,
            requestOptions,
        });

        // Parse the response
        const responseBody = await response.text();
        try {
            return JSON.parse(responseBody) as WriteRecordsResponse;
        } catch (error) {
            // If response isn't JSON, return a basic success response
            return { success: true };
        }
    }

    /**
     * Stream records to a sheet in raw JSONL format using HTTP body streaming.
     *
     * This method accepts an async generator/iterator of records and streams them
     * directly to the server using a ReadableStream as the HTTP request body.
     * This approach is memory efficient for large datasets as records are processed
     * and transmitted without loading all data into memory at once.
     *
     * The operation is atomic - all records are sent in a single HTTP request,
     * ensuring consistent write semantics. Records can be new inserts (without __k)
     * or updates to existing records (with __k field containing the record ID).
     *
     * @param recordsStream - Async generator/iterator that yields JsonlRecord objects
     * @param options - Write configuration options (sheetId, truncate, etc.)
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns Promise that resolves to WriteRecordsResponse with operation results
     *
     * @example
     * ```typescript
     * async function* generateRecords() {
     *   for (let i = 0; i < 100000; i++) {
     *     yield {
     *       firstName: `User${i}`,
     *       email: `user${i}@example.com`,
     *       __s: 'us_sh_123'
     *     };
     *   }
     * }
     *
     * const result = await recordsV2.writeRawStreaming(generateRecords(), {
     *   sheetId: 'us_sh_123',
     *   truncate: false
     * });
     * console.log(`Created: ${result.created}, Updated: ${result.updated}`);
     * ```
     */
    public async writeRawStreaming(
        recordsStream: AsyncIterable<JsonlRecord>,
        options: WriteStreamingOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        const url = await this._buildUrl(`/v2-alpha/records.jsonl`);

        // Add options as query parameters, excluding sheetId since it's in the record body
        const { sheetId, ...queryOptions } = options;
        const queryParams = this._buildQueryParams(queryOptions, false); // Write operation
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        // Create ReadableStream that converts records to JSONL
        const readableStream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const record of recordsStream) {
                        // Ensure sheet ID is set if provided in options
                        const enrichedRecord = sheetId && !record.__s ? { ...record, __s: sheetId } : record;
                        const jsonlLine = JSON.stringify(enrichedRecord) + "\n";
                        controller.enqueue(encoder.encode(jsonlLine));
                    }
                    controller.close();
                } catch (error) {
                    controller.error(error);
                }
            },
        });

        const headers = await this._prepareHeaders(requestOptions, "application/jsonl");

        // Execute the streaming request
        const response = await this._executeRequest(url.toString(), "POST", {
            body: readableStream as any, // TypeScript might complain about ReadableStream
            contentType: "application/jsonl",
            headers,
            requestOptions,
        });

        // Parse the response
        const responseBody = await response.text();
        try {
            return JSON.parse(responseBody) as WriteRecordsResponse;
        } catch (error) {
            // If response isn't JSON, return a basic success response
            return { success: true };
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
    private _buildQueryParams(params: Record<string, any>, isReadOperation: boolean = true): string {
        const searchParams = new URLSearchParams();

        // Only include stream=true for read operations (GET requests)
        if (isReadOperation) {
            searchParams.append("stream", "true");
        }

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
            body?: string | Uint8Array | ReadableStream;
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
}

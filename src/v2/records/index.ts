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

        // Add options as query parameters
        const queryParams = this._buildQueryParams(options);
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        // Convert records to JSONL format (one record per line)
        const jsonlBody = records.map((record) => JSON.stringify(record)).join("\n");

        const headers = await this._prepareHeaders(requestOptions, "application/jsonl");
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
     * Stream records to a sheet in raw JSONL format.
     *
     * This method provides an efficient way to write large datasets by streaming
     * records in chunks rather than loading all records into memory at once.
     * Accepts an async generator/iterator of JsonlRecord objects.
     *
     * @param recordsStream - Async generator/iterator that yields JsonlRecord objects
     * @param options - Write configuration options including chunk size
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
     *   chunkSize: 1000
     * });
     * ```
     */
    public async writeRawStreaming(
        recordsStream: AsyncIterable<JsonlRecord>,
        options: WriteStreamingOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        const useBodyStreaming = this._shouldUseBodyStreaming(options.useBodyStreaming);

        if (useBodyStreaming) {
            try {
                return await this._writeRawStreamingBodyWithFallback(recordsStream, options, requestOptions);
            } catch (error) {
                // This shouldn't happen with the new fallback implementation, but keep as safety net
                console.warn("Body streaming failed, falling back to chunking:", error);
                return await this._writeRawStreamingChunked(recordsStream, options, requestOptions);
            }
        } else {
            return await this._writeRawStreamingChunked(recordsStream, options, requestOptions);
        }
    }

    /**
     * Implementation of body streaming with built-in fallback to chunking
     */
    private async _writeRawStreamingBodyWithFallback(
        recordsStream: AsyncIterable<JsonlRecord>,
        options: WriteStreamingOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        const recordsBuffer: JsonlRecord[] = [];
        let streamingError: Error | null = null;

        const url = await this._buildUrl(`/v2-alpha/records.jsonl`);

        // Add options as query parameters
        const queryParams = this._buildQueryParams(options);
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        // Create ReadableStream that converts records to JSONL and buffers them for fallback
        const readableStream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const record of recordsStream) {
                        recordsBuffer.push(record); // Buffer for potential fallback
                        const jsonlLine = JSON.stringify(record) + "\n";
                        controller.enqueue(encoder.encode(jsonlLine));
                    }
                    controller.close();
                } catch (error) {
                    controller.error(error);
                }
            },
        });

        const headers = await this._prepareHeaders(requestOptions, "application/jsonl");

        try {
            // Try body streaming first
            const response = await this._executeRequest(url.toString(), "POST", {
                body: readableStream as any,
                contentType: "application/jsonl",
                headers,
                requestOptions,
            });

            // Parse the response
            const responseBody = await response.text();
            try {
                return JSON.parse(responseBody) as WriteRecordsResponse;
            } catch (error) {
                return { success: true };
            }
        } catch (error) {
            // Body streaming failed, fall back to single request with buffered records
            console.warn("Body streaming failed, falling back to single request:", error);

            if (recordsBuffer.length === 0) {
                return {
                    success: true,
                    created: 0,
                    updated: 0,
                };
            }

            // Use single writeRaw request with all buffered records
            return await this.writeRaw(recordsBuffer, options, requestOptions);
        }
    }

    /**
     * Insert records using the standard Flatfile format.
     *
     * This method provides compatibility with the V1 Records API by accepting
     * standard RecordData objects and converting them to the optimized JSONL format
     * internally. This is the recommended method when migrating from V1 to V2.
     *
     * @param sheetId - The ID of the sheet to insert records into
     * @param records - Array of RecordData objects in standard Flatfile format
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns Promise that resolves to RecordsResponse in standard Flatfile format
     *
     * @example
     * ```typescript
     * const records: Flatfile.RecordData[] = [{
     *   firstName: { value: "John", valid: true, messages: [] },
     *   lastName: { value: "Doe", valid: true, messages: [] },
     *   email: { value: "john.doe@example.com", valid: true, messages: [] }
     * }];
     *
     * const response = await recordsV2.insert('us_sh_123', records);
     * console.log(response.data.records);
     * ```
     */
    public async insert(
        sheetId: Flatfile.SheetId,
        records: Flatfile.RecordData[],
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<Flatfile.RecordsResponse> {
        // Convert RecordData to JsonlRecord format
        const jsonlRecords: JsonlRecord[] = records.map((record) => this._convertRecordDataToJsonl(record, sheetId));

        // Write the records
        const writeResult = await this.writeRaw(
            jsonlRecords,
            { sheetId, silent: false }, // Don't silence hooks for compatibility with V1
            requestOptions,
        );

        // Convert response to match V1 format
        const response: Flatfile.RecordsResponse = {
            data: {
                records: [], // V2 doesn't return the actual records, but V1 clients might expect this structure
                success: writeResult.success,
            },
        };

        return response;
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

    /**
     * Convert a standard Flatfile RecordData to JSONL format
     */
    private _convertRecordDataToJsonl(record: Flatfile.RecordData, sheetId: Flatfile.SheetId): JsonlRecord {
        const jsonlRecord: JsonlRecord = {
            __s: sheetId,
        };

        // Extract field values from CellValue objects
        Object.entries(record).forEach(([fieldKey, cellValue]) => {
            if (fieldKey === "id") {
                // Handle record ID specially
                if (cellValue) {
                    jsonlRecord.__k = cellValue as string;
                }
                return;
            }

            // Extract the actual value from CellValue
            if (cellValue && typeof cellValue === "object" && "value" in cellValue) {
                const cell = cellValue as Flatfile.CellValue;
                jsonlRecord[fieldKey] = cell.value;

                // Add messages if present
                if (cell.messages && cell.messages.length > 0) {
                    if (!jsonlRecord.__i) {
                        jsonlRecord.__i = {};
                    }
                    jsonlRecord.__i[fieldKey] = cell.messages;
                }
            } else {
                // If it's not a CellValue object, use the value directly
                jsonlRecord[fieldKey] = cellValue;
            }
        });

        return jsonlRecord;
    }

    /**
     * Check if the current environment supports streaming request bodies
     */
    private _supportsStreamingRequestBody(): boolean {
        try {
            // Check if ReadableStream exists and can be used as request body
            if (typeof ReadableStream === "undefined") {
                return false;
            }

            // Additional checks for environments that have ReadableStream but don't support it in fetch
            if (typeof window !== "undefined") {
                // Browser environment - most modern browsers support this
                return true;
            } else {
                // Node.js environment - check if it's a recent enough version
                // Node.js 18+ has proper ReadableStream support for fetch
                const nodeVersion = process.version;
                if (nodeVersion) {
                    const majorVersion = parseInt(nodeVersion.slice(1).split(".")[0]);
                    return majorVersion >= 18;
                }
                return true; // Assume support if we can't detect version
            }
        } catch {
            return false;
        }
    }

    /**
     * Determine whether to use body streaming based on options and browser capability
     */
    private _shouldUseBodyStreaming(option?: boolean | "auto"): boolean {
        if (option === true) {
            return true;
        }
        if (option === false) {
            return false;
        }
        // Auto-detect (default)
        return this._supportsStreamingRequestBody();
    }

    /**
     * Write records using true HTTP body streaming (single request with streaming body).
     *
     * This method streams the request body directly using ReadableStream, sending
     * all records in a single HTTP request rather than chunking into multiple requests.
     * This is more memory efficient and faster for very large datasets but requires
     * browser support for streaming request bodies.
     *
     * @param recordsStream - Async generator/iterator that yields JsonlRecord objects
     * @param options - Write configuration options
     * @param requestOptions - Optional request configuration (headers, timeout, etc.)
     * @returns Promise that resolves to WriteRecordsResponse with operation results
     *
     * @example
     * ```typescript
     * async function* generateRecords() {
     *   for (let i = 0; i < 100000; i++) {
     *     yield { firstName: `User${i}`, __s: 'us_sh_123' };
     *   }
     * }
     *
     * const result = await recordsV2.writeRawStreamingBody(generateRecords(), {
     *   sheetId: 'us_sh_123'
     * });
     * ```
     */
    public async writeRawStreamingBody(
        recordsStream: AsyncIterable<JsonlRecord>,
        options: WriteRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        if (!this._supportsStreamingRequestBody()) {
            throw new errors.FlatfileError({
                message:
                    "Browser does not support streaming request bodies. Use writeRawStreaming with chunking instead.",
            });
        }

        return await this._writeRawStreamingBody(recordsStream, options, requestOptions);
    }

    /**
     * Implementation of true HTTP body streaming
     */
    private async _writeRawStreamingBody(
        recordsStream: AsyncIterable<JsonlRecord>,
        options: WriteRecordsRequestOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        const url = await this._buildUrl(`/v2-alpha/records.jsonl`);

        // Add options as query parameters
        const queryParams = this._buildQueryParams(options);
        if (queryParams.length > 0) {
            url.search = queryParams;
        }

        // Create ReadableStream that converts records to JSONL
        const readableStream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const record of recordsStream) {
                        const jsonlLine = JSON.stringify(record) + "\n";
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

    /**
     * Implementation of chunked streaming (existing behavior)
     */
    private async _writeRawStreamingChunked(
        recordsStream: AsyncIterable<JsonlRecord>,
        options: WriteStreamingOptions = {},
        requestOptions: FernRecords.RequestOptions = {},
    ): Promise<WriteRecordsResponse> {
        const chunkSize = options.chunkSize || 1000;
        let totalCreated = 0;
        let totalUpdated = 0;
        let buffer: JsonlRecord[] = [];
        let hasRecords = false;

        try {
            for await (const record of recordsStream) {
                hasRecords = true;
                buffer.push(record);

                if (buffer.length >= chunkSize) {
                    const result = await this.writeRaw(buffer, options, requestOptions);
                    totalCreated += result.created || 0;
                    totalUpdated += result.updated || 0;
                    buffer = [];
                }
            }

            // Write remaining records in buffer
            if (buffer.length > 0) {
                const result = await this.writeRaw(buffer, options, requestOptions);
                totalCreated += result.created || 0;
                totalUpdated += result.updated || 0;
            }

            // If no records were processed, return success with 0 counts
            if (!hasRecords) {
                return {
                    success: true,
                    created: 0,
                    updated: 0,
                };
            }

            return {
                success: true,
                created: totalCreated,
                updated: totalUpdated,
            };
        } catch (error) {
            throw error;
        }
    }
}

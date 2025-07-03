import fs from "fs";
import { join } from "path";
import { RecordsV2 } from "../../src/v2/records";
import { Flatfile } from "../../src";

// Mock the global fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Helper to read the fixture data
const getFixtureData = (): string => {
    return fs.readFileSync(join(__dirname, "../fixtures/v2.records.get.jsonl"), "utf-8");
};

// Helper to parse JSONL fixture data into records array
const parseFixtureData = (): any[] => {
    const data = getFixtureData();
    return data
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => JSON.parse(line));
};

describe("RecordsV2", () => {
    let recordsV2: RecordsV2;
    const sheetId = "dev_sh_jVnmFCKg" as Flatfile.SheetId;
    const defaultRequestOptions = {};

    beforeEach(() => {
        recordsV2 = new RecordsV2({
            token: "test-token",
            baseUrl: "https://api.flatfile.com/v1",
        });
        mockFetch.mockClear();
        mockFetch.mockReset();
    });

    describe("get", () => {
        it("should fetch records and return GetRecordsResponse", async () => {
            const fixtureData = getFixtureData();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(fixtureData),
                body: null,
            });

            const result = await recordsV2.get(sheetId, {}, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledWith(
                expect.stringContaining("/v2-alpha/records.jsonl"),
                expect.objectContaining({
                    method: "GET",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-token",
                        "Content-Type": "application/json",
                    }),
                }),
            );

            expect(result).toEqual({
                data: {
                    records: expect.any(Array),
                    success: true,
                },
            });

            expect(result.data.records).toHaveLength(21); // Based on fixture data (21 valid records with __k field)

            // Check first record structure
            const firstRecord = result.data.records[0];
            expect(firstRecord).toMatchObject({
                id: "dev_rc_a5d2afda7dda4149afe51229e2674906",
                values: expect.objectContaining({
                    firstname: expect.objectContaining({
                        value: "John",
                        valid: true,
                        messages: [],
                    }),
                    lastname: expect.objectContaining({
                        value: "Smith [X]",
                        valid: true,
                        messages: [],
                    }),
                }),
                valid: true,
                metadata: {},
                config: {},
            });
        });

        it("should pass query parameters correctly", async () => {
            const fixtureData = getFixtureData();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(fixtureData),
                body: null,
            });

            const options = {
                pageSize: 100,
                includeMessages: true,
                fields: ["firstname", "lastname"],
            };

            await recordsV2.get(sheetId, options, defaultRequestOptions);

            const fetchCall = mockFetch.mock.calls[0];
            const url = new URL(fetchCall[0]);

            expect(url.searchParams.get("sheetId")).toBe(sheetId);
            expect(url.searchParams.get("pageSize")).toBe("100");
            expect(url.searchParams.get("includeMessages")).toBe("true");
            expect(url.searchParams.getAll("fields")).toEqual(["firstname", "lastname"]);
        });

        it("should handle fetch errors", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
                status: 404,
                text: () => Promise.resolve(JSON.stringify({ error: "Not found" })),
            });

            await expect(recordsV2.get(sheetId, {}, defaultRequestOptions)).rejects.toThrow();
        });
    });

    describe("getRaw", () => {
        it("should fetch and return raw JSONL records", async () => {
            const fixtureData = getFixtureData();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(fixtureData),
                body: null,
            });

            const result = await recordsV2.getRaw(sheetId, {}, defaultRequestOptions);

            expect(result).toHaveLength(21);

            // Check first record structure
            const firstRecord = result[0];
            expect(firstRecord).toMatchObject({
                __k: "dev_rc_a5d2afda7dda4149afe51229e2674906",
                __s: "dev_sh_jVnmFCKg",
                __n: "contacts-pCZHI4",
                firstname: "John",
                lastname: "Smith [X]",
                email: "john.smith@example.com",
            });
        });

        it("should handle empty response", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(""),
                body: null,
            });

            const result = await recordsV2.getRaw(sheetId, {}, defaultRequestOptions);
            expect(result).toEqual([]);
        });

        it("should skip malformed JSONL lines", async () => {
            const malformedData = `{"__k":"valid1","name":"John"}
invalid json line
{"__k":"valid2","name":"Jane"}`;

            // Mock console.warn to avoid test output noise
            const consoleSpy = jest.spyOn(console, "warn").mockImplementation();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(malformedData),
                body: null,
            });

            const result = await recordsV2.getRaw(sheetId, {}, defaultRequestOptions);

            expect(result).toHaveLength(2);
            expect(result[0].__k).toBe("valid1");
            expect(result[1].__k).toBe("valid2");
            expect(consoleSpy).toHaveBeenCalledWith("Failed to parse JSONL line:", "invalid json line");

            consoleSpy.mockRestore();
        });
    });

    describe("getStreaming", () => {
        it("should stream converted records", async () => {
            // Use simple test data instead of complex fixture
            const testData = `{"__k":"test_id_1","firstname":"John","lastname":"Doe"}
{"__k":"test_id_2","firstname":"Jane","lastname":"Smith"}`;

            // Mock fetch for the streaming request
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(testData),
                body: null, // Will trigger fallback streaming mode
            });

            const results: Flatfile.RecordWithLinks[] = [];
            try {
                for await (const record of recordsV2.getStreaming(sheetId, {}, defaultRequestOptions)) {
                    results.push(record);
                }
            } catch (error) {
                console.error("Error during streaming:", error);
                throw error;
            }

            expect(results).toHaveLength(2);

            // Check first record conversion
            const firstRecord = results[0];
            expect(firstRecord).toMatchObject({
                id: "test_id_1",
                values: expect.objectContaining({
                    firstname: expect.objectContaining({
                        value: "John",
                        valid: true,
                        messages: [],
                    }),
                    lastname: expect.objectContaining({
                        value: "Doe",
                        valid: true,
                        messages: [],
                    }),
                }),
                valid: true,
                metadata: {},
                config: {},
            });
        });

        it("should be able to call getStreaming method", async () => {
            // Simple test to verify the method exists and can be called
            const testData = `{"__k":"test_id","name":"test"}`;

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(testData),
                body: null,
            });

            // Just verify we can create the generator
            const generator = recordsV2.getStreaming(sheetId, {}, defaultRequestOptions);
            expect(generator).toBeDefined();
            expect(typeof generator[Symbol.asyncIterator]).toBe("function");
        });
    });

    describe("getRawStreaming", () => {
        it("should stream raw JSONL records with ReadableStream", async () => {
            // Test ReadableStream with single record to verify core functionality
            const testData = `{"__k":"stream_test_id","name":"StreamTest"}`;
            const encoder = new TextEncoder();
            const chunk = encoder.encode(testData);

            const mockStream = new ReadableStream({
                start(controller) {
                    controller.enqueue(chunk);
                    controller.close();
                },
            });

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                body: mockStream,
            });

            const results: any[] = [];
            for await (const record of recordsV2.getRawStreaming(sheetId, {}, defaultRequestOptions)) {
                results.push(record);
            }

            expect(results).toHaveLength(1);
            expect(results[0].__k).toBe("stream_test_id");
            expect(results[0].name).toBe("StreamTest");
        });

        it("should handle streaming without ReadableStream support", async () => {
            const fixtureData = getFixtureData();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(fixtureData),
                body: null, // No ReadableStream support
            });

            const results: any[] = [];
            for await (const record of recordsV2.getRawStreaming(sheetId, {}, defaultRequestOptions)) {
                results.push(record);
            }

            expect(results).toHaveLength(21);
            expect(results[0].__k).toBe("dev_rc_a5d2afda7dda4149afe51229e2674906");
        });
    });

    describe("_convertStreamedRecord", () => {
        it("should convert JSONL record to RecordWithLinks format", () => {
            const recordsV2Instance = recordsV2 as any; // Access private method
            const fixtureRecords = parseFixtureData();
            const rawRecord = fixtureRecords[0];

            const converted = recordsV2Instance._convertStreamedRecord(rawRecord);

            expect(converted).toMatchObject({
                id: rawRecord.__k,
                values: expect.objectContaining({
                    firstname: {
                        value: rawRecord.firstname,
                        valid: true,
                        messages: [],
                    },
                    lastname: {
                        value: rawRecord.lastname,
                        valid: true,
                        messages: [],
                    },
                    email: {
                        value: rawRecord.email,
                        valid: true,
                        messages: [],
                    },
                }),
                valid: true,
                metadata: {},
                config: {},
            });
        });

        it("should handle records with metadata and config", () => {
            const recordsV2Instance = recordsV2 as any;
            const rawRecord = {
                __k: "test_id",
                __m: { custom: "metadata" },
                __c: { custom: "config" },
                __e: false, // invalid record
                fieldName: "fieldValue",
            };

            const converted = recordsV2Instance._convertStreamedRecord(rawRecord);

            expect(converted).toMatchObject({
                id: "test_id",
                values: {
                    fieldName: {
                        value: "fieldValue",
                        valid: true,
                        messages: [],
                    },
                },
                valid: false,
                metadata: { custom: "metadata" },
                config: { custom: "config" },
            });
        });

        it("should handle records with messages", () => {
            const recordsV2Instance = recordsV2 as any;
            const rawRecord = {
                __k: "test_id",
                __i: {
                    fieldName: [{ type: "error", message: "Invalid value" }],
                },
                fieldName: "fieldValue",
            };

            const converted = recordsV2Instance._convertStreamedRecord(rawRecord);

            expect(converted).toMatchObject({
                id: "test_id",
                values: {
                    fieldName: {
                        value: "fieldValue",
                        valid: false, // Should be false due to messages
                        messages: [{ type: "error", message: "Invalid value" }],
                    },
                },
                valid: true,
                metadata: {},
                config: {},
            });
        });

        it("should handle records with timestamps", () => {
            const recordsV2Instance = recordsV2 as any;
            const timestamp = "2023-11-20T16:59:40.286Z";
            const rawRecord = {
                __k: "test_id",
                __u: timestamp,
                __v: "version_id",
                fieldName: "fieldValue",
            };

            const converted = recordsV2Instance._convertStreamedRecord(rawRecord);

            expect(converted).toMatchObject({
                id: "test_id",
                values: {
                    fieldName: {
                        value: "fieldValue",
                        valid: true,
                        messages: [],
                    },
                },
                valid: true,
                metadata: {},
                config: {},
                updatedAt: new Date(timestamp),
                versionId: "version_id",
                commitId: "version_id",
            });
        });
    });

    describe("writeRaw", () => {
        it("should write JSONL records successfully", async () => {
            const mockResponse = { success: true, created: 2, updated: 0 };

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const records = [
                { firstName: "John", lastName: "Doe", __s: sheetId },
                { firstName: "Jane", lastName: "Smith", __s: sheetId },
            ];

            const result = await recordsV2.writeRaw(records, { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledWith(
                expect.stringContaining("/v2-alpha/records.jsonl"),
                expect.objectContaining({
                    method: "POST",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-token",
                        "Content-Type": "application/jsonl",
                        "X-Disable-Hooks": "true",
                        "X-Fern-Language": "JavaScript",
                    }),
                    body: records.map((r) => JSON.stringify(r)).join("\n"),
                }),
            );

            expect(result).toEqual(mockResponse);
        });

        it("should pass query parameters correctly for writeRaw", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify({ success: true })),
            });

            const records = [{ firstName: "John", __s: sheetId }];
            const options = {
                sheetId,
                truncate: true,
                snapshot: true,
                silent: true,
                for: "event_123" as Flatfile.EventId,
            };

            await recordsV2.writeRaw(records, options, defaultRequestOptions);

            const fetchCall = mockFetch.mock.calls[0];
            const url = new URL(fetchCall[0]);

            expect(url.searchParams.get("sheetId")).toBe(sheetId);
            expect(url.searchParams.get("truncate")).toBe("true");
            expect(url.searchParams.get("snapshot")).toBe("true");
            expect(url.searchParams.get("silent")).toBe("true");
            expect(url.searchParams.get("for")).toBe("event_123");
        });

        it("should handle non-JSON response for writeRaw", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve("OK"),
            });

            const records = [{ firstName: "John", __s: sheetId }];
            const result = await recordsV2.writeRaw(records, { sheetId }, defaultRequestOptions);

            expect(result).toEqual({ success: true });
        });

        it("should handle writeRaw fetch errors", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
                status: 400,
                text: () => Promise.resolve(JSON.stringify({ error: "Bad request" })),
            });

            const records = [{ firstName: "John", __s: sheetId }];

            await expect(recordsV2.writeRaw(records, { sheetId }, defaultRequestOptions)).rejects.toThrow();
        });

        it("should send empty body for empty records array", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify({ success: true })),
            });

            await recordsV2.writeRaw([], { sheetId }, defaultRequestOptions);

            const fetchCall = mockFetch.mock.calls[0];
            expect(fetchCall[1].body).toBe("");
        });
    });

    describe("writeRawStreaming", () => {
        it("should stream records in chunks", async () => {
            // Mock multiple successful responses for chunks
            const mockResponse = { success: true, created: 2, updated: 0 };
            mockFetch
                .mockResolvedValueOnce({
                    ok: true,
                    status: 200,
                    text: () => Promise.resolve(JSON.stringify(mockResponse)),
                })
                .mockResolvedValueOnce({
                    ok: true,
                    status: 200,
                    text: () => Promise.resolve(JSON.stringify(mockResponse)),
                });

            // Force chunking mode by disabling body streaming
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(false);

            // Create async generator that yields 3 records (will create 2 chunks with chunkSize=2)
            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
                yield { firstName: "User2", __s: sheetId };
                yield { firstName: "User3", __s: sheetId };
            }

            const result = await recordsV2.writeRawStreaming(
                generateRecords(),
                { sheetId, chunkSize: 2 },
                defaultRequestOptions,
            );

            expect(mockFetch).toHaveBeenCalledTimes(2); // Two chunks
            expect(result).toEqual({
                success: true,
                created: 4, // 2 + 2 from both chunks
                updated: 0,
            });
        });

        it("should handle single chunk when records less than chunkSize", async () => {
            const mockResponse = { success: true, created: 1, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            // Force chunking mode
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(false);

            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
            }

            const result = await recordsV2.writeRawStreaming(
                generateRecords(),
                { sheetId, chunkSize: 5 },
                defaultRequestOptions,
            );

            expect(mockFetch).toHaveBeenCalledTimes(1);
            expect(result).toEqual(mockResponse);
        });

        it("should use default chunk size when not specified", async () => {
            const mockResponse = { success: true, created: 1, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            // Force chunking mode
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(false);

            async function* generateRecords() {
                for (let i = 0; i < 5; i++) {
                    yield { firstName: `User${i}`, __s: sheetId };
                }
            }

            await recordsV2.writeRawStreaming(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledTimes(1); // Should be one chunk since 5 < default 1000
        });

        it("should handle streaming errors properly", async () => {
            // Force chunking mode to test chunking error handling
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(false);

            mockFetch.mockRejectedValueOnce(new Error("Network error"));

            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
            }

            await expect(
                recordsV2.writeRawStreaming(generateRecords(), { sheetId }, defaultRequestOptions),
            ).rejects.toThrow("Network error");
        });

        it("should handle empty async generator", async () => {
            // Force chunking mode to avoid body streaming attempts
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(false);

            async function* generateRecords() {
                // Empty generator
                return;
            }

            const result = await recordsV2.writeRawStreaming(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(mockFetch).not.toHaveBeenCalled();
            expect(result).toEqual({
                success: true,
                created: 0,
                updated: 0,
            });
        });

        it("should use body streaming when explicitly enabled", async () => {
            const mockResponse = { success: true, created: 5, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            // Force streaming capability to true
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(true);

            async function* generateRecords() {
                for (let i = 0; i < 5; i++) {
                    yield { firstName: `User${i}`, __s: sheetId };
                }
            }

            const result = await recordsV2.writeRawStreaming(
                generateRecords(),
                { sheetId, useBodyStreaming: true },
                defaultRequestOptions,
            );

            expect(mockFetch).toHaveBeenCalledTimes(1); // Single request with streaming body
            expect(result).toEqual(mockResponse);

            // Check that the body is a ReadableStream-like object (in test env it may be mocked)
            const fetchCall = mockFetch.mock.calls[0];
            expect(fetchCall[1].body).toBeDefined();
        });

        it("should fall back to single request when body streaming fails", async () => {
            const mockResponse = { success: true, created: 2, updated: 0 };

            // First call fails (streaming), second succeeds (single request fallback)
            mockFetch.mockRejectedValueOnce(new Error("Streaming not supported")).mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            // Ensure the instance has auto-detect behavior that will try streaming first
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(true);

            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
                yield { firstName: "User2", __s: sheetId };
            }

            // Mock console.warn to avoid test output noise
            const consoleSpy = jest.spyOn(console, "warn").mockImplementation();

            const result = await recordsV2.writeRawStreaming(
                generateRecords(),
                { sheetId, useBodyStreaming: true }, // Explicitly enable to force streaming attempt
                defaultRequestOptions,
            );

            expect(mockFetch).toHaveBeenCalledTimes(2); // Streaming attempt + single request fallback
            expect(result).toEqual(mockResponse);
            expect(consoleSpy).toHaveBeenCalledWith(
                "Body streaming failed, falling back to single request:",
                expect.any(Error),
            );

            consoleSpy.mockRestore();
        });

        it("should use chunking when body streaming is explicitly disabled", async () => {
            const mockResponse = { success: true, created: 3, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                for (let i = 0; i < 3; i++) {
                    yield { firstName: `User${i}`, __s: sheetId };
                }
            }

            const result = await recordsV2.writeRawStreaming(
                generateRecords(),
                { sheetId, useBodyStreaming: false, chunkSize: 10 },
                defaultRequestOptions,
            );

            expect(mockFetch).toHaveBeenCalledTimes(1); // Single chunk since all records fit
            expect(result).toEqual(mockResponse);
        });
    });

    describe("writeRawStreamingBody", () => {
        it("should use true body streaming for supported environments", async () => {
            const mockResponse = { success: true, created: 3, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            // Mock browser environment detection
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(true);

            async function* generateRecords() {
                for (let i = 0; i < 3; i++) {
                    yield { firstName: `User${i}`, __s: sheetId };
                }
            }

            const result = await recordsV2.writeRawStreamingBody(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledTimes(1);
            expect(result).toEqual(mockResponse);
        });

        it("should throw error for unsupported environments", async () => {
            // Mock unsupported environment
            const recordsV2Instance = recordsV2 as any;
            jest.spyOn(recordsV2Instance, "_supportsStreamingRequestBody").mockReturnValue(false);

            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
            }

            await expect(
                recordsV2.writeRawStreamingBody(generateRecords(), { sheetId }, defaultRequestOptions),
            ).rejects.toThrow("Browser does not support streaming request bodies");
        });
    });

    describe("_supportsStreamingRequestBody", () => {
        it("should detect ReadableStream support", () => {
            const recordsV2Instance = recordsV2 as any;

            // ReadableStream exists in test environment
            const result = recordsV2Instance._supportsStreamingRequestBody();
            expect(typeof result).toBe("boolean");
        });
    });

    describe("insert", () => {
        it("should convert RecordData to JSONL and insert", async () => {
            const mockResponse = { success: true, created: 1, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const records: Flatfile.RecordData[] = [
                {
                    firstName: { value: "John", valid: true, messages: [] },
                    lastName: { value: "Doe", valid: true, messages: [] },
                    email: {
                        value: "john.doe@example.com",
                        valid: true,
                        messages: [{ type: "error", message: "Invalid email" }],
                    },
                },
            ];

            const result = await recordsV2.insert(sheetId, records, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledWith(
                expect.stringMatching(/\/v2-alpha\/records\.jsonl\?.*sheetId=.*&silent=false/),
                expect.objectContaining({
                    method: "POST",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-token",
                        "Content-Type": "application/jsonl",
                        "X-Disable-Hooks": "true",
                        "X-Fern-Language": "JavaScript",
                    }),
                }),
            );

            // Check that the body contains JSONL formatted data
            const fetchCall = mockFetch.mock.calls[0];
            const body = fetchCall[1].body;
            const jsonlRecord = JSON.parse(body);

            expect(jsonlRecord).toMatchObject({
                __s: sheetId,
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                __i: {
                    email: [{ type: "error", message: "Invalid email" }],
                },
            });

            expect(result).toEqual({
                data: {
                    records: [],
                    success: true,
                },
            });
        });

        it("should handle records with IDs for updates", async () => {
            const mockResponse = { success: true, created: 0, updated: 1 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const records: Flatfile.RecordData[] = [
                {
                    id: "existing_record_id" as Flatfile.RecordId,
                    firstName: { value: "Jane", valid: true, messages: [] },
                },
            ];

            await recordsV2.insert(sheetId, records, defaultRequestOptions);

            const fetchCall = mockFetch.mock.calls[0];
            const body = fetchCall[1].body;
            const jsonlRecord = JSON.parse(body);

            expect(jsonlRecord).toMatchObject({
                __k: "existing_record_id",
                __s: sheetId,
                firstName: "Jane",
            });
        });

        it("should handle insert errors", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
                status: 404,
                text: () => Promise.resolve(JSON.stringify({ error: "Sheet not found" })),
            });

            const records: Flatfile.RecordData[] = [
                {
                    firstName: { value: "John", valid: true, messages: [] },
                },
            ];

            await expect(recordsV2.insert(sheetId, records, defaultRequestOptions)).rejects.toThrow();
        });

        it("should handle empty records array for insert", async () => {
            const mockResponse = { success: true, created: 0, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const result = await recordsV2.insert(sheetId, [], defaultRequestOptions);

            expect(result).toEqual({
                data: {
                    records: [],
                    success: true,
                },
            });
        });
    });

    describe("_convertRecordDataToJsonl", () => {
        it("should convert RecordData to JSONL format", () => {
            const recordsV2Instance = recordsV2 as any; // Access private method

            const recordData: Flatfile.RecordData = {
                firstName: { value: "John", valid: true, messages: [] },
                lastName: { value: "Doe", valid: false, messages: [{ type: "error", message: "Required field" }] },
                email: { value: "john@example.com", valid: true, messages: [] },
            };

            const result = recordsV2Instance._convertRecordDataToJsonl(recordData, sheetId);

            expect(result).toMatchObject({
                __s: sheetId,
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                __i: {
                    lastName: [{ type: "error", message: "Required field" }],
                },
            });
        });

        it("should handle record with ID", () => {
            const recordsV2Instance = recordsV2 as any;

            const recordData: Flatfile.RecordData = {
                id: "record_123" as Flatfile.RecordId,
                firstName: { value: "Jane", valid: true, messages: [] },
            };

            const result = recordsV2Instance._convertRecordDataToJsonl(recordData, sheetId);

            expect(result).toMatchObject({
                __k: "record_123",
                __s: sheetId,
                firstName: "Jane",
            });
        });

        it("should handle non-CellValue fields", () => {
            const recordsV2Instance = recordsV2 as any;

            const recordData: Flatfile.RecordData = {
                firstName: { value: "John", valid: true, messages: [] },
            };

            const result = recordsV2Instance._convertRecordDataToJsonl(recordData, sheetId);

            expect(result).toMatchObject({
                __s: sheetId,
                firstName: "John",
            });
        });

        it("should handle fields with no messages", () => {
            const recordsV2Instance = recordsV2 as any;

            const recordData: Flatfile.RecordData = {
                firstName: { value: "John", valid: true, messages: [] },
                lastName: { value: "Doe", valid: true, messages: undefined },
            };

            const result = recordsV2Instance._convertRecordDataToJsonl(recordData, sheetId);

            expect(result).toMatchObject({
                __s: sheetId,
                firstName: "John",
                lastName: "Doe",
            });
            expect(result.__i).toBeUndefined();
        });

        it("should handle multiple fields with messages", () => {
            const recordsV2Instance = recordsV2 as any;

            const recordData: Flatfile.RecordData = {
                firstName: { value: "John", valid: false, messages: [{ type: "error", message: "Unusual name" }] },
                email: {
                    value: "invalid-email",
                    valid: false,
                    messages: [{ type: "error", message: "Invalid format" }],
                },
            };

            const result = recordsV2Instance._convertRecordDataToJsonl(recordData, sheetId);

            expect(result).toMatchObject({
                __s: sheetId,
                firstName: "John",
                email: "invalid-email",
                __i: {
                    firstName: [{ type: "error", message: "Unusual name" }],
                    email: [{ type: "error", message: "Invalid format" }],
                },
            });
        });
    });
});

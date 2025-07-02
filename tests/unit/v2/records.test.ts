import fs from "fs";
import { join } from "path";
import { RecordsV2 } from "../../../src/v2/records";
import { Flatfile } from "../../../src";

// Mock the global fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Helper to read the fixture data
const getFixtureData = (): string => {
    return fs.readFileSync(join(__dirname, "../../fixtures/v2.records.get.jsonl"), "utf-8");
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
});

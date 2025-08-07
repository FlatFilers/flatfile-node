import fs from "fs";
import { join } from "path";
import { RecordsV2, FlatfileRecord } from "../../src/v2/records";
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

            expect(mockFetch).toHaveBeenCalledTimes(1);

            const fetchCall = mockFetch.mock.calls[0];
            expect(fetchCall[0]).toContain("/v2-alpha/records.jsonl");
            expect(fetchCall[1].method).toBe("POST");
            expect(fetchCall[1].headers).toMatchObject({
                Authorization: "Bearer test-token",
                "Content-Type": "application/jsonl",
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
            });

            // Check the body content by parsing the JSONL
            const bodyLines = fetchCall[1].body.split("\n");
            expect(bodyLines).toHaveLength(2);

            const firstRecord = JSON.parse(bodyLines[0]);
            expect(firstRecord).toMatchObject({
                __s: sheetId,
                firstName: "John",
                lastName: "Doe",
            });

            const secondRecord = JSON.parse(bodyLines[1]);
            expect(secondRecord).toMatchObject({
                __s: sheetId,
                firstName: "Jane",
                lastName: "Smith",
            });

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

            // sheetId is excluded from query parameters for write operations (it's in the record body)
            expect(url.searchParams.get("sheetId")).toBe(null);
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
        it("should stream records using body streaming", async () => {
            const mockResponse = { success: true, created: 3, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
                yield { firstName: "User2", __s: sheetId };
                yield { firstName: "User3", __s: sheetId };
            }

            const result = await recordsV2.writeRawStreaming(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledTimes(1); // Single request with streaming body
            expect(result).toEqual(mockResponse);

            // Check that the body is a ReadableStream-like object
            const fetchCall = mockFetch.mock.calls[0];
            expect(fetchCall[1].body).toBeDefined();
        });

        it("should handle streaming errors properly", async () => {
            mockFetch.mockRejectedValueOnce(new Error("Network error"));

            async function* generateRecords() {
                yield { firstName: "User1", __s: sheetId };
            }

            await expect(
                recordsV2.writeRawStreaming(generateRecords(), { sheetId }, defaultRequestOptions),
            ).rejects.toThrow("Network error");
        });

        it("should handle empty async generator", async () => {
            const mockResponse = { success: true, created: 0, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                // Empty generator
                return;
            }

            const result = await recordsV2.writeRawStreaming(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledTimes(1); // Always makes a request even for empty stream
            expect(result).toEqual(mockResponse);
        });
    });

    describe("get", () => {
        it("should fetch and return FlatfileRecord objects", async () => {
            const fixtureData = getFixtureData();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(fixtureData),
                body: null,
            });

            const result = await recordsV2.get(sheetId, {}, defaultRequestOptions);

            expect(result).toHaveLength(21);

            // Check that results are FlatfileRecord instances
            const firstRecord = result[0];
            expect(firstRecord).toBeInstanceOf(FlatfileRecord);

            // Test FlatfileRecord methods
            expect(firstRecord.id).toBe("dev_rc_a5d2afda7dda4149afe51229e2674906");
            expect(firstRecord.sheetId).toBe("dev_sh_jVnmFCKg");
            expect(firstRecord.slug).toBe("contacts-pCZHI4");
            expect(firstRecord.str("firstname")).toBe("John");
            expect(firstRecord.str("lastname")).toBe("Smith [X]");
            expect(firstRecord.str("email")).toBe("john.smith@example.com");

            // Test presence checks
            expect(firstRecord.has("firstname")).toBe(true);
            expect(firstRecord.has("nonexistent")).toBe(false);

            // Test type conversion
            expect(firstRecord.defStr("firstname")).toBe("John");
            expect(firstRecord.str("nonexistent")).toBeNull();
        });

        it("should handle empty response for get", async () => {
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(""),
                body: null,
            });

            const result = await recordsV2.get(sheetId, {}, defaultRequestOptions);
            expect(result).toEqual([]);
        });

        it("should skip malformed JSONL lines and return FlatfileRecord objects", async () => {
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

            const result = await recordsV2.get(sheetId, {}, defaultRequestOptions);

            expect(result).toHaveLength(2);
            expect(result[0]).toBeInstanceOf(FlatfileRecord);
            expect(result[1]).toBeInstanceOf(FlatfileRecord);
            expect(result[0].id).toBe("valid1");
            expect(result[1].id).toBe("valid2");
            expect(result[0].str("name")).toBe("John");
            expect(result[1].str("name")).toBe("Jane");

            consoleSpy.mockRestore();
        });

        it("should handle FlatfileRecord manipulation", async () => {
            const testData = `{"__k":"test_id","name":"Test","email":"test@example.com"}`;

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(testData),
                body: null,
            });

            const result = await recordsV2.get(sheetId, {}, defaultRequestOptions);
            const record = result[0];

            // Test change tracking
            expect(record.isDirty()).toBe(false);
            record.set("newField", "newValue");
            expect(record.isDirty()).toBe(true);
            expect(record.get("newField")).toBe("newValue");

            // Test error handling
            expect(record.hasError()).toBe(false);
            record.err("email", "Invalid email");
            expect(record.hasError()).toBe(true);
            expect(record.hasError("email")).toBe(true);

            // Test conversion back to JSON
            const jsonRecord = record.toJSON();
            expect(jsonRecord.__k).toBe("test_id");
            expect(jsonRecord.name).toBe("Test");
            expect(jsonRecord.newField).toBe("newValue");
        });
    });

    describe("getStreaming", () => {
        it("should stream FlatfileRecord objects with ReadableStream", async () => {
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

            const results: FlatfileRecord[] = [];
            for await (const record of recordsV2.getStreaming(sheetId, {}, defaultRequestOptions)) {
                results.push(record);
            }

            expect(results).toHaveLength(1);
            const record = results[0];
            expect(record).toBeInstanceOf(FlatfileRecord);
            expect(record.id).toBe("stream_test_id");
            expect(record.str("name")).toBe("StreamTest");

            // Test FlatfileRecord methods work on streamed records
            expect(record.has("name")).toBe(true);
            expect(record.defStr("name")).toBe("StreamTest");
        });

        it("should handle streaming without ReadableStream support for getStreaming", async () => {
            const fixtureData = getFixtureData();

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(fixtureData),
                body: null, // No ReadableStream support
            });

            const results: FlatfileRecord[] = [];
            for await (const record of recordsV2.getStreaming(sheetId, {}, defaultRequestOptions)) {
                results.push(record);
            }

            expect(results).toHaveLength(21);
            const firstRecord = results[0];
            expect(firstRecord).toBeInstanceOf(FlatfileRecord);
            expect(firstRecord.id).toBe("dev_rc_a5d2afda7dda4149afe51229e2674906");
            expect(firstRecord.str("firstname")).toBe("John");
        });

        it("should handle multiple FlatfileRecord objects in stream", async () => {
            const testData = `{"__k":"record1","name":"First"}
{"__k":"record2","name":"Second"}
{"__k":"record3","name":"Third"}`;

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(testData),
                body: null,
            });

            const results: FlatfileRecord[] = [];
            let recordCount = 0;
            for await (const record of recordsV2.getStreaming(sheetId, {}, defaultRequestOptions)) {
                expect(record).toBeInstanceOf(FlatfileRecord);
                results.push(record);
                recordCount++;

                // Test each record individually as it streams
                if (recordCount === 1) {
                    expect(record.id).toBe("record1");
                    expect(record.str("name")).toBe("First");
                } else if (recordCount === 2) {
                    expect(record.id).toBe("record2");
                    expect(record.str("name")).toBe("Second");
                } else if (recordCount === 3) {
                    expect(record.id).toBe("record3");
                    expect(record.str("name")).toBe("Third");
                }
            }

            expect(results).toHaveLength(3);
            expect(recordCount).toBe(3);
        });

        it("should handle manipulation of streamed FlatfileRecord objects", async () => {
            const testData = `{"__k":"manipulation_test","email":"invalid-email","age":"25"}`;

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(testData),
                body: null,
            });

            const results: FlatfileRecord[] = [];
            for await (const record of recordsV2.getStreaming(sheetId, {}, defaultRequestOptions)) {
                // Test type conversion on streamed record
                expect(record.num("age")).toBe(25);
                expect(record.str("email")).toBe("invalid-email");

                // Test manipulation on streamed record
                if (record.str("email") && !record.str("email")!.includes("@")) {
                    record.err("email", "Invalid email format");
                }

                record.set("processed", true);
                results.push(record);
            }

            const record = results[0];
            expect(record.hasError("email")).toBe(true);
            expect(record.get("processed")).toBe(true);
            expect(record.isDirty()).toBe(true);
        });
    });

    describe("write", () => {
        it("should write FlatfileRecord objects with changesets", async () => {
            const mockResponse = { success: true, created: 1, updated: 1 };

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            // Create records with changes
            const newRecord = new FlatfileRecord({ firstName: "John", lastName: "Doe" } as any);
            newRecord.set("email", "john@example.com");
            
            const existingRecord = new FlatfileRecord({ __k: "us_rc_123", firstName: "Jane" } as any);
            existingRecord.set("lastName", "Smith");

            const records = [newRecord, existingRecord];

            const result = await recordsV2.write(records, { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledTimes(1);

            const fetchCall = mockFetch.mock.calls[0];
            expect(fetchCall[0]).toContain("/v2-alpha/records.jsonl");
            expect(fetchCall[1].method).toBe("POST");
            expect(fetchCall[1].headers).toMatchObject({
                Authorization: "Bearer test-token",
                "Content-Type": "application/jsonl",
                "X-Sheet-Id": sheetId,
            });

            // Check the body contains changesets, not full records
            const bodyLines = fetchCall[1].body.split("\n").filter((line: string) => line.trim());
            expect(bodyLines).toHaveLength(2);

            const firstChangeset = JSON.parse(bodyLines[0]);
            expect(firstChangeset).toMatchObject({
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                __s: sheetId,
            });

            const secondChangeset = JSON.parse(bodyLines[1]);
            expect(secondChangeset).toMatchObject({
                __k: "us_rc_123",
                lastName: "Smith",
                __s: sheetId,
            });

            expect(result).toEqual(mockResponse);

            // Verify records are committed (changes cleared)
            expect(newRecord.isDirty()).toBe(false); // Committed, no longer dirty
            expect(existingRecord.isDirty()).toBe(false); // Has __k, changes cleared
        });

        it("should write full records when truncate is true", async () => {
            const mockResponse = { success: true, created: 2, updated: 0 };

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const record1 = new FlatfileRecord({ __k: "us_rc_123", firstName: "John", lastName: "Doe" } as any);
            const record2 = new FlatfileRecord({ __k: "us_rc_456", firstName: "Jane", lastName: "Smith" } as any);
            
            // Make some changes
            record1.set("email", "john@example.com");
            record2.set("phone", "555-1234");

            const records = [record1, record2];

            const result = await recordsV2.write(records, { sheetId, truncate: true }, defaultRequestOptions);

            const fetchCall = mockFetch.mock.calls[0];
            const bodyLines = fetchCall[1].body.split("\n").filter((line: string) => line.trim());
            expect(bodyLines).toHaveLength(2);

            // With truncate=true, should get full records, not just changesets
            const firstRecord = JSON.parse(bodyLines[0]);
            expect(firstRecord).toMatchObject({
                __k: "us_rc_123",
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                __s: sheetId,
            });

            const secondRecord = JSON.parse(bodyLines[1]);
            expect(secondRecord).toMatchObject({
                __k: "us_rc_456",
                firstName: "Jane",
                lastName: "Smith",
                phone: "555-1234",
                __s: sheetId,
            });

            expect(result).toEqual(mockResponse);
        });

        it("should throw error when no records provided", async () => {
            await expect(recordsV2.write([], { sheetId }, defaultRequestOptions)).rejects.toThrow(
                "No records provided to write."
            );
        });

        it("should throw error when no changes to write", async () => {
            const record = new FlatfileRecord({ __k: "us_rc_123", firstName: "John" } as any);
            // Don't make any changes - record is not dirty

            await expect(recordsV2.write([record], { sheetId }, defaultRequestOptions)).rejects.toThrow(
                "No changes made to the records that would need to be written."
            );
        });

        it("should filter out deleted temporary records", async () => {
            const mockResponse = { success: true, created: 1, updated: 0 };

            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const validRecord = new FlatfileRecord({ firstName: "John" } as any);
            validRecord.set("email", "john@example.com");

            const tempRecord = new FlatfileRecord({} as any);
            (tempRecord as any)._tempId = "TEMP_123";
            tempRecord.delete();
            tempRecord.set("firstName", "Temp");

            const records = [validRecord, tempRecord];

            await recordsV2.write(records, { sheetId }, defaultRequestOptions);

            const fetchCall = mockFetch.mock.calls[0];
            const bodyLines = fetchCall[1].body.split("\n").filter((line: string) => line.trim());
            
            // Should only have one record (temp deleted record filtered out)
            expect(bodyLines).toHaveLength(1);
            
            const recordData = JSON.parse(bodyLines[0]);
            expect(recordData).toMatchObject({
                firstName: "John",
                email: "john@example.com",
            });
        });
    });

    describe("writeStreaming", () => {
        it("should stream FlatfileRecord objects with changesets", async () => {
            const mockResponse = { success: true, created: 3, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                for (let i = 1; i <= 3; i++) {
                    const record = new FlatfileRecord({ firstName: `User${i}` } as any);
                    record.set("email", `user${i}@example.com`);
                    record.set("processed", true);
                    yield record;
                }
            }

            const result = await recordsV2.writeStreaming(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(mockFetch).toHaveBeenCalledTimes(1);
            expect(result).toEqual(mockResponse);

            // Check that the body is a ReadableStream-like object
            const fetchCall = mockFetch.mock.calls[0];
            expect(fetchCall[1].body).toBeDefined();
        });

        it("should handle truncate mode in streaming", async () => {
            const mockResponse = { success: true, created: 2, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                const record1 = new FlatfileRecord({ __k: "us_rc_123", firstName: "John", lastName: "Doe" } as any);
                record1.set("email", "john@example.com");
                yield record1;

                const record2 = new FlatfileRecord({ __k: "us_rc_456", firstName: "Jane" } as any);
                record2.set("lastName", "Smith");
                yield record2;
            }

            const result = await recordsV2.writeStreaming(
                generateRecords(), 
                { sheetId, truncate: true }, 
                defaultRequestOptions
            );

            expect(result).toEqual(mockResponse);
        });

        it("should handle empty stream when truncate is true", async () => {
            const mockResponse = { success: true, created: 0, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                // Empty generator
                return;
            }

            const result = await recordsV2.writeStreaming(
                generateRecords(),
                { sheetId, truncate: true },
                defaultRequestOptions
            );

            expect(result).toEqual(mockResponse);
        });

        it("should throw error when no changes in streaming mode", async () => {
            async function* generateRecords() {
                // Yield records with no changes
                yield new FlatfileRecord({ __k: "us_rc_123", firstName: "John" } as any);
                yield new FlatfileRecord({ __k: "us_rc_456", firstName: "Jane" } as any);
            }

            // The error should be thrown during the ReadableStream creation/processing
            await expect(
                recordsV2.writeStreaming(generateRecords(), { sheetId }, defaultRequestOptions)
            ).rejects.toThrow(); // Just check that it throws, not the specific message
        });

        it("should filter deleted temporary records in streaming", async () => {
            const mockResponse = { success: true, created: 1, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            async function* generateRecords() {
                // Valid record with changes
                const validRecord = new FlatfileRecord({ firstName: "John" } as any);
                validRecord.set("email", "john@example.com");
                yield validRecord;

                // Temporary deleted record - should be filtered out
                const tempRecord = new FlatfileRecord({} as any);
                (tempRecord as any)._tempId = "TEMP_456";
                tempRecord.delete();
                tempRecord.set("firstName", "TempUser");
                yield tempRecord;
            }

            const result = await recordsV2.writeStreaming(generateRecords(), { sheetId }, defaultRequestOptions);

            expect(result).toEqual(mockResponse);
        });

        it("should commit all processed records after successful write", async () => {
            const mockResponse = { success: true, created: 2, updated: 0 };
            mockFetch.mockResolvedValueOnce({
                ok: true,
                status: 200,
                text: () => Promise.resolve(JSON.stringify(mockResponse)),
            });

            const processedRecords: FlatfileRecord[] = [];

            async function* generateRecords() {
                const record1 = new FlatfileRecord({ firstName: "User1" } as any);
                record1.set("email", "user1@example.com");
                processedRecords.push(record1);
                yield record1;

                const record2 = new FlatfileRecord({ firstName: "User2" } as any);
                record2.set("email", "user2@example.com");
                processedRecords.push(record2);
                yield record2;
            }

            // Verify records are dirty before write
            const recordsArray: FlatfileRecord[] = [];
            for await (const record of generateRecords()) {
                recordsArray.push(record);
            }
            
            expect(recordsArray[0].isDirty()).toBe(true);
            expect(recordsArray[1].isDirty()).toBe(true);

            // Reset and do the actual write
            async function* generateRecordsAgain() {
                yield recordsArray[0];
                yield recordsArray[1];
            }

            await recordsV2.writeStreaming(generateRecordsAgain(), { sheetId }, defaultRequestOptions);

            // Verify records are committed after successful write (changes cleared)
            expect(recordsArray[0].isDirty()).toBe(false); // Committed, no longer dirty
            expect(recordsArray[1].isDirty()).toBe(false); // Committed, no longer dirty
        });
    });

    describe("FlatfileRecord changeset logic", () => {
        it("should handle commit() behavior for new records", () => {
            // New record should be dirty initially
            const newRecord = new FlatfileRecord({ firstName: 'John' } as any);
            expect(newRecord.isDirty()).toBe(true);
            
            // After commit, should no longer be dirty
            newRecord.commit();
            expect(newRecord.isDirty()).toBe(false);
            
            // Making changes should make it dirty again
            newRecord.set('lastName', 'Doe');
            expect(newRecord.isDirty()).toBe(true);
            
            // After commit, should be clean again
            newRecord.commit();
            expect(newRecord.isDirty()).toBe(false);
        });

        it("should reset committed flag when any state is modified", () => {
            const record = new FlatfileRecord({ firstName: 'John' } as any);
            record.commit();
            expect(record.isDirty()).toBe(false);
            
            // Test set()
            record.set('lastName', 'Doe');
            expect(record.isDirty()).toBe(true);
            record.commit();
            expect(record.isDirty()).toBe(false);
            
            // Test err()
            record.err('firstName', 'Invalid name');
            expect(record.isDirty()).toBe(true);
            record.commit();
            expect(record.isDirty()).toBe(false);
            
            // Test warn()
            record.warn('firstName', 'Warning message');
            expect(record.isDirty()).toBe(true);
            record.commit();
            expect(record.isDirty()).toBe(false);
            
            // Test info()
            record.info('firstName', 'Info message');
            expect(record.isDirty()).toBe(true);
            record.commit();
            expect(record.isDirty()).toBe(false);
            
            // Test delete()
            record.delete();
            expect(record.isDirty()).toBe(true);
        });

        it("should manually mark record as dirty with setDirty()", () => {
            // Test with new record
            const newRecord = new FlatfileRecord({ firstName: 'John', lastName: 'Doe' } as any);
            newRecord.commit();
            expect(newRecord.isDirty()).toBe(false);
            
            newRecord.setDirty();
            expect(newRecord.isDirty()).toBe(true);
            
            // Verify changeset includes all data for new record
            const newChangeset = newRecord.changeset();
            expect(newChangeset).toEqual({ firstName: 'John', lastName: 'Doe' });
            
            // Test with existing record (has __k)
            const existingRecord = new FlatfileRecord({ __k: '123', firstName: 'Jane', age: 30 } as any);
            existingRecord.commit();
            expect(existingRecord.isDirty()).toBe(false);
            
            existingRecord.setDirty();
            expect(existingRecord.isDirty()).toBe(true);
            
            // Verify changeset includes all non-system fields for existing record
            const existingChangeset = existingRecord.changeset();
            expect(existingChangeset).toEqual({ __k: '123', firstName: 'Jane', age: 30 });
            
            // Test that setDirty returns this for chaining
            const chainResult = existingRecord.setDirty();
            expect(chainResult).toBe(existingRecord);
        });

        it("should handle new vs existing record changesets correctly", () => {
            // New record (no __k) - changeset should include all data
            const newRecord = new FlatfileRecord({
                firstName: 'John',
                lastName: 'Doe'
            } as any);
            newRecord.set('email', 'john@example.com');

            const newChangeset = newRecord.changeset();
            expect(newChangeset).toMatchObject({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com'
            });

            // Existing record (with __k) - changeset should only include changes
            const existingRecord = new FlatfileRecord({
                __k: 'us_rc_123',
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane@example.com'
            } as any);
            existingRecord.set('email', 'jane.smith@newdomain.com');

            const existingChangeset = existingRecord.changeset();
            expect(existingChangeset).toMatchObject({
                __k: 'us_rc_123',
                email: 'jane.smith@newdomain.com'
            });
            expect(existingChangeset.firstName).toBeUndefined();
            expect(existingChangeset.lastName).toBeUndefined();
        });

        it("should have consistent isDirty and changeset behavior", () => {
            // New record should be dirty (has data to write)
            const newRecord = new FlatfileRecord({
                firstName: 'John',
                lastName: 'Doe'
            } as any);
            
            expect(newRecord.isDirty()).toBe(true); // New records are always dirty
            const newChangeset = newRecord.changeset();
            expect(Object.keys(newChangeset).length).toBeGreaterThan(0); // Has data

            // Existing record with no changes should not be dirty
            const existingRecord = new FlatfileRecord({
                __k: 'us_rc_123',
                firstName: 'Jane'
            } as any);
            
            expect(existingRecord.isDirty()).toBe(false); // No changes made
            
            // But after making changes, should be dirty
            existingRecord.set('email', 'jane@example.com');
            expect(existingRecord.isDirty()).toBe(true); // Now has changes
            
            const existingChangeset = existingRecord.changeset();
            expect(existingChangeset).toMatchObject({
                __k: 'us_rc_123',
                email: 'jane@example.com'
            });
        });
    });
});

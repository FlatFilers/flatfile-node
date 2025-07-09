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
});

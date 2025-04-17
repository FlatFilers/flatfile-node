import pako from "pako";
import urlJoin from "url-join";
import { Flatfile } from "..";
import { Records as FernRecords } from "../api/resources/records/client/Client";
import * as core from "../core";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";

interface InsertRequestOptions extends FernRecords.RequestOptions {
    compressRequestBody?: boolean;
}

export class Records extends FernRecords {
    /**
     * Adds records to a workbook sheet
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.RecordData[]} request
     * @param {Records.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.records.insert("us_sh_YOUR_ID", [{
     *             "firstName": {
     *                 value: "John",
     *                 messages: [],
     *                 valid: true
     *             },
     *             "lastName": {
     *                 value: "Smith",
     *                 messages: [],
     *                 valid: true
     *             },
     *             "email": {
     *                 value: "john.smith@example.com",
     *                 messages: [],
     *                 valid: true
     *             }
     *         }])
     */
    public insert(
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[],
        requestOptions?: InsertRequestOptions
    ): core.HttpResponsePromise<Flatfile.RecordsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__insertRecords(sheetId, request, requestOptions));
    }

    private async __insertRecords(
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[],
        requestOptions?: InsertRequestOptions
    ): Promise<core.WithRawResponse<Flatfile.RecordsResponse>> {
        const body = requestOptions?.compressRequestBody
            ? pako.gzip(JSON.stringify(request))
            : await serializers.records.insert.Request.jsonOrThrow(request, {
                  unrecognizedObjectKeys: "strip",
              });
        const gzipHeaders = requestOptions?.compressRequestBody
            ? { "Content-Encoding": "gzip", "Content-Length": body.length.toString() }
            : {};
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/records`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
                ...gzipHeaders,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.records.insert.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.RecordsResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        serializers.Errors.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        serializers.Errors.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling POST /sheets/{sheetId}/records.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }
}

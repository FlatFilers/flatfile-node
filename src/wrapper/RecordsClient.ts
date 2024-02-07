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
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await flatfile.records.insert("us_sh_YOUR_ID", [{
     *             "firstName": {
     *                 value: undefined,
     *                 messages: [],
     *                 valid: true
     *             },
     *             "lastName": {
     *                 value: undefined,
     *                 messages: [],
     *                 valid: true
     *             },
     *             "email": {
     *                 value: undefined,
     *                 messages: [],
     *                 valid: true
     *             }
     *         }])
     */
    public async insert(
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[],
        requestOptions?: InsertRequestOptions
    ): Promise<Flatfile.RecordsResponse> {
        const body = requestOptions?.compressRequestBody
            ? pako.gzip(JSON.stringify(request))
            : await serializers.records.insert.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" });
        const gzipHeaders = requestOptions?.compressRequestBody
            ? { "Content-Encoding": "gzip", "Content-Length": body.length.toString() }
            : {};
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.7.0",
                ...gzipHeaders,
            },
            contentType: "application/json",
            body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.Errors.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.Errors.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }
}

import pako from "pako";
import urlJoin from "url-join";
import { Flatfile } from "..";
import { Records as FernRecords } from "../api/resources/records/client/Client";
import { RecordsV2 } from "../v2/records";
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
        requestOptions?: InsertRequestOptions,
    ): core.HttpResponsePromise<Flatfile.RecordsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__insertRecords(sheetId, request, requestOptions));
    }

    get v2(): RecordsV2 {
        return new RecordsV2(this._options);
    }

    private async __insertRecords(
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[],
        requestOptions?: InsertRequestOptions,
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
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/records`,
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
            requestType: requestOptions?.compressRequestBody ? "bytes" : "json",
            body,
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
                        _response.rawResponse,
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
                        _response.rawResponse,
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


    /**
     * Returns records from a sheet in a workbook. 
     * Please use this method instead of `records.get` which may take 
     * a large amount of time to deserialize and validate the response from the API.
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await flatfile.records.get("us_sh_YOUR_ID")
     */
    public async getFast(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsRequest = {},
        requestOptions?: FernRecords.RequestOptions
    ): Promise<serializers.GetRecordsResponse.Raw> {
        const {
            versionId,
            commitId,
            sinceVersionId,
            sinceCommitId,
            sortField,
            sortDirection,
            filter,
            filterField,
            searchValue,
            searchField,
            ids,
            pageSize,
            pageNumber,
            includeCounts,
            includeLength,
            includeLinks,
            includeMessages,
            fields,
            for: for_,
            q,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (versionId != null) {
            _queryParams["versionId"] = versionId;
        }

        if (commitId != null) {
            _queryParams["commitId"] = commitId;
        }

        if (sinceVersionId != null) {
            _queryParams["sinceVersionId"] = sinceVersionId;
        }

        if (sinceCommitId != null) {
            _queryParams["sinceCommitId"] = sinceCommitId;
        }

        if (sortField != null) {
            _queryParams["sortField"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sortDirection"] = sortDirection;
        }

        if (filter != null) {
            _queryParams["filter"] = filter;
        }

        if (filterField != null) {
            _queryParams["filterField"] = filterField;
        }

        if (searchValue != null) {
            _queryParams["searchValue"] = searchValue;
        }

        if (searchField != null) {
            _queryParams["searchField"] = searchField;
        }

        if (ids != null) {
            if (Array.isArray(ids)) {
                _queryParams["ids"] = ids.map((item) => item);
            } else {
                _queryParams["ids"] = ids;
            }
        }

        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize.toString();
        }

        if (pageNumber != null) {
            _queryParams["pageNumber"] = pageNumber.toString();
        }

        if (includeCounts != null) {
            _queryParams["includeCounts"] = includeCounts.toString();
        }

        if (includeLength != null) {
            _queryParams["includeLength"] = includeLength.toString();
        }

        if (includeLinks != null) {
            _queryParams["includeLinks"] = includeLinks.toString();
        }

        if (includeMessages != null) {
            _queryParams["includeMessages"] = includeMessages.toString();
        }

        if (fields != null) {
            if (Array.isArray(fields)) {
                _queryParams["fields"] = fields.map((item) => item);
            } else {
                _queryParams["fields"] = fields;
            }
        }

        if (for_ != null) {
            _queryParams["for"] = for_;
        }

        if (q != null) {
            _queryParams["q"] = q;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.12.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as serializers.GetRecordsResponse.Raw;
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

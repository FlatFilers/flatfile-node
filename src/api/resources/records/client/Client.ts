/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Records {
    export interface Options {
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Disable-Hooks header */
        xDisableHooks?: "true";
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Disable-Hooks header */
        xDisableHooks?: "true";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Records {
    constructor(protected readonly _options: Records.Options = {}) {}

    /**
     * Returns records from a sheet in a workbook
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.GetRecordsRequest} request
     * @param {Records.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.records.get("us_sh_YOUR_ID")
     */
    public get(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsRequest = {},
        requestOptions?: Records.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.GetRecordsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(sheetId, request, requestOptions));
    }

    private async __get(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsRequest = {},
        requestOptions?: Records.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.GetRecordsResponse>> {
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
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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
            _queryParams["sortDirection"] = serializers.SortDirection.jsonOrThrow(sortDirection, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (filter != null) {
            _queryParams["filter"] = serializers.Filter.jsonOrThrow(filter, { unrecognizedObjectKeys: "strip" });
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
                _queryParams["ids"] = ids.map((item) =>
                    serializers.RecordId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
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
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/records`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.16.0",
                "User-Agent": "@flatfile/api/1.16.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.GetRecordsResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling GET /sheets/{sheetId}/records.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns indices of records from a sheet in a workbook
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.GetRecordIndicesRequest} request
     * @param {Records.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.records.indices("us_sh_YOUR_ID", {
     *         ids: "list<$commons.RecordId.Example0, $commons.RecordId.Example1>"
     *     })
     */
    public indices(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordIndicesRequest,
        requestOptions?: Records.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.GetRecordIndicesResponse> {
        return core.HttpResponsePromise.fromPromise(this.__indices(sheetId, request, requestOptions));
    }

    private async __indices(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordIndicesRequest,
        requestOptions?: Records.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.GetRecordIndicesResponse>> {
        const {
            commitId,
            sinceCommitId,
            sortField,
            sortDirection,
            filter,
            filterField,
            searchValue,
            searchField,
            ids,
            q,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (commitId != null) {
            _queryParams["commitId"] = commitId;
        }

        if (sinceCommitId != null) {
            _queryParams["sinceCommitId"] = sinceCommitId;
        }

        if (sortField != null) {
            _queryParams["sortField"] = sortField;
        }

        if (sortDirection != null) {
            _queryParams["sortDirection"] = serializers.SortDirection.jsonOrThrow(sortDirection, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (filter != null) {
            _queryParams["filter"] = serializers.Filter.jsonOrThrow(filter, { unrecognizedObjectKeys: "strip" });
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

        if (Array.isArray(ids)) {
            _queryParams["ids"] = ids.map((item) =>
                serializers.RecordId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
            );
        } else {
            _queryParams["ids"] = ids;
        }

        if (q != null) {
            _queryParams["q"] = q;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/records/indices`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.16.0",
                "User-Agent": "@flatfile/api/1.16.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.GetRecordIndicesResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError(
                    "Timeout exceeded when calling GET /sheets/{sheetId}/records/indices.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Updates existing records in a workbook sheet
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.Records} request
     * @param {Records.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.records.update("us_sh_YOUR_ID", [{
     *             id: "us_rc_YOUR_ID",
     *             versionId: "us_vr_YOUR_ID",
     *             commitId: "us_vr_YOUR_ID",
     *             values: {
     *                 "firstName": {
     *                     value: "John",
     *                     messages: [],
     *                     valid: true
     *                 },
     *                 "lastName": {
     *                     value: "Smith",
     *                     messages: [],
     *                     valid: true
     *                 },
     *                 "email": {
     *                     value: "john.smith@example.com",
     *                     messages: [],
     *                     valid: true
     *                 }
     *             },
     *             valid: true,
     *             metadata: {},
     *             config: {}
     *         }])
     */
    public update(
        sheetId: Flatfile.SheetId,
        request: Flatfile.Records,
        requestOptions?: Records.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.VersionResponse> {
        return core.HttpResponsePromise.fromPromise(this.__update(sheetId, request, requestOptions));
    }

    private async __update(
        sheetId: Flatfile.SheetId,
        request: Flatfile.Records,
        requestOptions?: Records.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.VersionResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/records`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.16.0",
                "User-Agent": "@flatfile/api/1.16.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.Records.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.VersionResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling PUT /sheets/{sheetId}/records.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

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
        requestOptions?: Records.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.RecordsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__insert(sheetId, request, requestOptions));
    }

    private async __insert(
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[],
        requestOptions?: Records.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.RecordsResponse>> {
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
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.16.0",
                "User-Agent": "@flatfile/api/1.16.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.records.insert.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
     * Deletes records from a workbook sheet
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.DeleteRecordsRequest} request
     * @param {Records.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.records.delete("us_sh_YOUR_ID", {
     *         ids: "us_rc_YOUR_ID"
     *     })
     */
    public delete(
        sheetId: Flatfile.SheetId,
        request: Flatfile.DeleteRecordsRequest,
        requestOptions?: Records.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.Success> {
        return core.HttpResponsePromise.fromPromise(this.__delete(sheetId, request, requestOptions));
    }

    private async __delete(
        sheetId: Flatfile.SheetId,
        request: Flatfile.DeleteRecordsRequest,
        requestOptions?: Records.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.Success>> {
        const { ids } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (Array.isArray(ids)) {
            _queryParams["ids"] = ids.map((item) =>
                serializers.RecordId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
            );
        } else {
            _queryParams["ids"] = ids;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/records`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.16.0",
                "User-Agent": "@flatfile/api/1.16.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.Success.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError(
                    "Timeout exceeded when calling DELETE /sheets/{sheetId}/records.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Searches for all values that match the 'find' value (globally or for a specific field via 'fieldKey') and replaces them with the 'replace' value. Wrap 'find' value in double quotes for exact match (""). Returns a commitId for the updated records
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.FindAndReplaceRecordRequest} request
     * @param {Records.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.records.findAndReplace("us_sh_YOUR_ID", {
     *         fieldKey: "email"
     *     })
     */
    public findAndReplace(
        sheetId: Flatfile.SheetId,
        request: Flatfile.FindAndReplaceRecordRequest,
        requestOptions?: Records.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.VersionResponse> {
        return core.HttpResponsePromise.fromPromise(this.__findAndReplace(sheetId, request, requestOptions));
    }

    private async __findAndReplace(
        sheetId: Flatfile.SheetId,
        request: Flatfile.FindAndReplaceRecordRequest,
        requestOptions?: Records.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.VersionResponse>> {
        const { filter, filterField, searchValue, searchField, ids, q, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (filter != null) {
            _queryParams["filter"] = serializers.Filter.jsonOrThrow(filter, { unrecognizedObjectKeys: "strip" });
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
                _queryParams["ids"] = ids.map((item) =>
                    serializers.RecordId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["ids"] = ids;
            }
        }

        if (q != null) {
            _queryParams["q"] = q;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/find-replace`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.16.0",
                "User-Agent": "@flatfile/api/1.16.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.FindAndReplaceRecordRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.VersionResponse.parseOrThrow(_response.body, {
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
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError(
                    "Timeout exceeded when calling PUT /sheets/{sheetId}/find-replace.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}

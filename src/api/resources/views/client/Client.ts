/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Views {
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

export class Views {
    constructor(protected readonly _options: Views.Options = {}) {}

    /**
     * Returns all views for the sheet
     *
     * @param {Flatfile.ListViewsRequest} request
     * @param {Views.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.views.list({
     *         sheetId: "us_sh_YOUR_ID"
     *     })
     */
    public list(
        request: Flatfile.ListViewsRequest,
        requestOptions?: Views.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.ListViewsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Flatfile.ListViewsRequest,
        requestOptions?: Views.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.ListViewsResponse>> {
        const { sheetId, pageSize, pageNumber } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["sheetId"] = sheetId;
        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize.toString();
        }

        if (pageNumber != null) {
            _queryParams["pageNumber"] = pageNumber.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                "/views",
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
                data: serializers.ListViewsResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling GET /views.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Add a new view to the space
     *
     * @param {Flatfile.ViewCreate} request
     * @param {Views.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.views.create({
     *         sheetId: "us_sh_YOUR_ID",
     *         name: "My View",
     *         config: {
     *             filter: "error",
     *             filterField: "email",
     *             q: "firstname like %John%",
     *             sortField: "email",
     *             sortDirection: "asc"
     *         }
     *     })
     */
    public create(
        request: Flatfile.ViewCreate,
        requestOptions?: Views.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.ViewResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Flatfile.ViewCreate,
        requestOptions?: Views.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.ViewResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                "/views",
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
            body: serializers.ViewCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ViewResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling POST /views.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a single view
     *
     * @param {Flatfile.ViewId} viewId - ID of view to return
     * @param {Views.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.views.get("us_vi_YOUR_ID")
     */
    public get(
        viewId: Flatfile.ViewId,
        requestOptions?: Views.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.ViewResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(viewId, requestOptions));
    }

    private async __get(
        viewId: Flatfile.ViewId,
        requestOptions?: Views.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.ViewResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/views/${encodeURIComponent(serializers.ViewId.jsonOrThrow(viewId))}`,
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ViewResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling GET /views/{viewId}.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Updates a single view
     *
     * @param {Flatfile.ViewId} viewId - ID of view to update
     * @param {Flatfile.ViewUpdate} request
     * @param {Views.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.views.update("us_vi_YOUR_ID", {
     *         name: "My View",
     *         config: {
     *             filter: "error",
     *             filterField: "email",
     *             q: "firstname like %John%",
     *             sortField: "email",
     *             sortDirection: "asc"
     *         }
     *     })
     */
    public update(
        viewId: Flatfile.ViewId,
        request: Flatfile.ViewUpdate,
        requestOptions?: Views.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.ViewResponse> {
        return core.HttpResponsePromise.fromPromise(this.__update(viewId, request, requestOptions));
    }

    private async __update(
        viewId: Flatfile.ViewId,
        request: Flatfile.ViewUpdate,
        requestOptions?: Views.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.ViewResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/views/${encodeURIComponent(serializers.ViewId.jsonOrThrow(viewId))}`,
            ),
            method: "PATCH",
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
            body: serializers.ViewUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ViewResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling PATCH /views/{viewId}.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Deletes a single view
     *
     * @param {Flatfile.ViewId} viewId - ID of view to delete
     * @param {Views.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.views.delete("us_vi_YOUR_ID")
     */
    public delete(
        viewId: Flatfile.ViewId,
        requestOptions?: Views.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.Success> {
        return core.HttpResponsePromise.fromPromise(this.__delete(viewId, requestOptions));
    }

    private async __delete(
        viewId: Flatfile.ViewId,
        requestOptions?: Views.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.Success>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/views/${encodeURIComponent(serializers.ViewId.jsonOrThrow(viewId))}`,
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling DELETE /views/{viewId}.");
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

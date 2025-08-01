/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Documents {
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

export class Documents {
    constructor(protected readonly _options: Documents.Options = {}) {}

    /**
     * Returns all documents for a space
     *
     * @param {Flatfile.SpaceId} spaceId - ID of space to return
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.documents.list("us_sp_YOUR_ID")
     */
    public list(
        spaceId: Flatfile.SpaceId,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.ListDocumentsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(spaceId, requestOptions));
    }

    private async __list(
        spaceId: Flatfile.SpaceId,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.ListDocumentsResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/spaces/${encodeURIComponent(serializers.SpaceId.jsonOrThrow(spaceId))}/documents`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.21.0",
                "User-Agent": "@flatfile/api/1.21.0",
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
                data: serializers.ListDocumentsResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling GET /spaces/{spaceId}/documents.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Add a new document to the space
     *
     * @param {Flatfile.SpaceId} spaceId - ID of space to return
     * @param {Flatfile.DocumentConfig} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.documents.create("us_sp_YOUR_ID", {
     *         title: "My Document 1",
     *         body: "My information",
     *         actions: [{
     *                 operation: "submitAction",
     *                 mode: "foreground",
     *                 label: "Submit",
     *                 description: "Submit data to webhook.site",
     *                 primary: true
     *             }]
     *     })
     */
    public create(
        spaceId: Flatfile.SpaceId,
        request: Flatfile.DocumentConfig,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.DocumentResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(spaceId, request, requestOptions));
    }

    private async __create(
        spaceId: Flatfile.SpaceId,
        request: Flatfile.DocumentConfig,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.DocumentResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/spaces/${encodeURIComponent(serializers.SpaceId.jsonOrThrow(spaceId))}/documents`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.21.0",
                "User-Agent": "@flatfile/api/1.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DocumentConfig.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.DocumentResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /spaces/{spaceId}/documents.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a single document
     *
     * @param {Flatfile.SpaceId} spaceId - ID of space to return
     * @param {Flatfile.DocumentId} documentId - ID of document to return
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.documents.get("us_sp_YOUR_ID", "us_dc_YOUR_ID")
     */
    public get(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.DocumentResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(spaceId, documentId, requestOptions));
    }

    private async __get(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.DocumentResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/spaces/${encodeURIComponent(serializers.SpaceId.jsonOrThrow(spaceId))}/documents/${encodeURIComponent(serializers.DocumentId.jsonOrThrow(documentId))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.21.0",
                "User-Agent": "@flatfile/api/1.21.0",
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
                data: serializers.DocumentResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /spaces/{spaceId}/documents/{documentId}.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * updates a single document, for only the body and title
     *
     * @param {Flatfile.SpaceId} spaceId - ID of space to return
     * @param {Flatfile.DocumentId} documentId - ID of document to return
     * @param {Flatfile.DocumentConfig} request
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.documents.update("us_sp_YOUR_ID", "us_dc_YOUR_ID", {
     *         title: "Updated Title",
     *         body: "Updated My information"
     *     })
     */
    public update(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        request: Flatfile.DocumentConfig,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.DocumentResponse> {
        return core.HttpResponsePromise.fromPromise(this.__update(spaceId, documentId, request, requestOptions));
    }

    private async __update(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        request: Flatfile.DocumentConfig,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.DocumentResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/spaces/${encodeURIComponent(serializers.SpaceId.jsonOrThrow(spaceId))}/documents/${encodeURIComponent(serializers.DocumentId.jsonOrThrow(documentId))}`,
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.21.0",
                "User-Agent": "@flatfile/api/1.21.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DocumentConfig.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.DocumentResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling PATCH /spaces/{spaceId}/documents/{documentId}.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Deletes a single document
     *
     * @param {Flatfile.SpaceId} spaceId - ID of space to return
     * @param {Flatfile.DocumentId} documentId - ID of document to delete
     * @param {Documents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     *
     * @example
     *     await client.documents.delete("spaceId", "documentId")
     */
    public delete(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        requestOptions?: Documents.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.Success> {
        return core.HttpResponsePromise.fromPromise(this.__delete(spaceId, documentId, requestOptions));
    }

    private async __delete(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        requestOptions?: Documents.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.Success>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/spaces/${encodeURIComponent(serializers.SpaceId.jsonOrThrow(spaceId))}/documents/${encodeURIComponent(serializers.DocumentId.jsonOrThrow(documentId))}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": requestOptions?.xDisableHooks ?? this._options?.xDisableHooks ?? "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.21.0",
                "User-Agent": "@flatfile/api/1.21.0",
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
                    "Timeout exceeded when calling DELETE /spaces/{spaceId}/documents/{documentId}.",
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

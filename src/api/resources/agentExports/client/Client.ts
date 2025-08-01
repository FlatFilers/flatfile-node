/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import * as stream from "stream";

export declare namespace AgentExports {
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

export class AgentExports {
    constructor(protected readonly _options: AgentExports.Options = {}) {}

    /**
     * @param {Flatfile.ListAgentExportsRequest} request
     * @param {AgentExports.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.agentExports.list()
     */
    public list(
        request: Flatfile.ListAgentExportsRequest = {},
        requestOptions?: AgentExports.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.ListAgentExportsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Flatfile.ListAgentExportsRequest = {},
        requestOptions?: AgentExports.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.ListAgentExportsResponse>> {
        const { environmentId, agentId, pageSize, pageNumber } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (environmentId != null) {
            _queryParams["environmentId"] = environmentId;
        }

        if (agentId != null) {
            _queryParams["agentId"] = agentId;
        }

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
                "/agent-exports",
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ListAgentExportsResponse.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling GET /agent-exports.");
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Flatfile.AgentExportId} agentExportId
     * @param {AgentExports.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.agentExports.get("us_agx_YOUR_ID")
     */
    public get(
        agentExportId: Flatfile.AgentExportId,
        requestOptions?: AgentExports.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.GetAgentExportResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(agentExportId, requestOptions));
    }

    private async __get(
        agentExportId: Flatfile.AgentExportId,
        requestOptions?: AgentExports.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.GetAgentExportResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/agent-exports/${encodeURIComponent(serializers.AgentExportId.jsonOrThrow(agentExportId))}`,
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
                data: serializers.GetAgentExportResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /agent-exports/{agentExportId}.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    public download(
        agentExportId: Flatfile.AgentExportId,
        requestOptions?: AgentExports.RequestOptions,
    ): core.HttpResponsePromise<stream.Readable> {
        return core.HttpResponsePromise.fromPromise(this.__download(agentExportId, requestOptions));
    }

    private async __download(
        agentExportId: Flatfile.AgentExportId,
        requestOptions?: AgentExports.RequestOptions,
    ): Promise<core.WithRawResponse<stream.Readable>> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/agent-exports/${encodeURIComponent(serializers.AgentExportId.jsonOrThrow(agentExportId))}/download`,
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
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body, rawResponse: _response.rawResponse };
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
                    "Timeout exceeded when calling GET /agent-exports/{agentExportId}/download.",
                );
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Flatfile.AgentExportId} agentExportId
     * @param {AgentExports.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.agentExports.delete("us_agx_YOUR_ID")
     */
    public delete(
        agentExportId: Flatfile.AgentExportId,
        requestOptions?: AgentExports.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.Success> {
        return core.HttpResponsePromise.fromPromise(this.__delete(agentExportId, requestOptions));
    }

    private async __delete(
        agentExportId: Flatfile.AgentExportId,
        requestOptions?: AgentExports.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.Success>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/agent-exports/${encodeURIComponent(serializers.AgentExportId.jsonOrThrow(agentExportId))}`,
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
                    "Timeout exceeded when calling DELETE /agent-exports/{agentExportId}.",
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

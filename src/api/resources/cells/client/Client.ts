/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Cells {
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

export class Cells {
    constructor(protected readonly _options: Cells.Options = {}) {}

    /**
     * Returns record cell values grouped by all fields in the sheet
     *
     * @param {Flatfile.SheetId} sheetId - ID of sheet
     * @param {Flatfile.GetFieldValuesRequestDeprecated} request
     * @param {Cells.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cells.getValues("us_sh_YOUR_ID", {
     *         fieldKey: "firstName",
     *         sortField: "firstName",
     *         sortDirection: "asc",
     *         filter: "valid"
     *     })
     */
    public getValues(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetFieldValuesRequestDeprecated = {},
        requestOptions?: Cells.RequestOptions,
    ): core.HttpResponsePromise<Flatfile.CellsResponseDeprecated> {
        return core.HttpResponsePromise.fromPromise(this.__getValues(sheetId, request, requestOptions));
    }

    private async __getValues(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetFieldValuesRequestDeprecated = {},
        requestOptions?: Cells.RequestOptions,
    ): Promise<core.WithRawResponse<Flatfile.CellsResponseDeprecated>> {
        const {
            fieldKey,
            sortField,
            sortDirection,
            filter,
            filterField,
            pageSize,
            pageNumber,
            distinct,
            includeCounts,
            searchValue,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (fieldKey != null) {
            _queryParams["fieldKey"] = fieldKey;
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

        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize.toString();
        }

        if (pageNumber != null) {
            _queryParams["pageNumber"] = pageNumber.toString();
        }

        if (distinct != null) {
            _queryParams["distinct"] = distinct.toString();
        }

        if (includeCounts != null) {
            _queryParams["includeCounts"] = includeCounts.toString();
        }

        if (searchValue != null) {
            _queryParams["searchValue"] = searchValue;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.FlatfileEnvironment.Production,
                `/sheets/${encodeURIComponent(serializers.SheetId.jsonOrThrow(sheetId))}/cells`,
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
                data: serializers.CellsResponseDeprecated.parseOrThrow(_response.body, {
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
                throw new errors.FlatfileTimeoutError("Timeout exceeded when calling GET /sheets/{sheetId}/cells.");
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

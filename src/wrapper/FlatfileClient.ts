import { CrossEnvConfig } from "@flatfile/cross-env-config";
import urlJoin from "url-join";
import { FlatfileClient as FernClient } from "../Client";
import * as core from "../core";
import * as environments from "../environments";
import { Records } from "./RecordsClient";

CrossEnvConfig.alias("FLATFILE_API_URL", "AGENT_INTERNAL_URL");
CrossEnvConfig.alias("FLATFILE_BEARER_TOKEN", "FLATFILE_API_KEY");

export declare namespace FlatfileClient {
    interface Options {
        /**
         * @deprecated use apiUrl instead
         */
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        apiUrl?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<string>;
    }
}

export class FlatfileClient extends FernClient {
    private token: string | undefined;

    constructor(options: FlatfileClient.Options = {}) {
        super({
            environment: resolveEnvironment(options),
            token: options.token ?? tokenSupplier,
        });
    }

    protected _records: Records | undefined;

    public get records(): Records {
        return (this._records ??= new Records(this._options));
    }
}

const resolveEnvironment = (options: FlatfileClient.Options) => {
    if (options.apiUrl && !options.apiUrl.endsWith("/v1")) {
        return urlJoin(options.apiUrl, "v1");
    }
    return options.environment || options.apiUrl || environmentSupplier();
};

const environmentSupplier = () => {
    const url = CrossEnvConfig.get("FLATFILE_API_URL");
    if (!url) {
        return environments.FlatfileEnvironment.Production;
    }
    return urlJoin(url, "v1");
};

const tokenSupplier = () => {
    const token = CrossEnvConfig.get("FLATFILE_BEARER_TOKEN");
    if (token == undefined) {
        throw new Error("FLATFILE_BEARER_TOKEN is not undefined");
    }
    return token;
};

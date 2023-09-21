import { FlatfileClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import urlJoin from "url-join";
import { CrossEnvConfig } from "@flatfile/cross-env-config";
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
            environment: (options.environment || options.apiUrl) ?? environmentSupplier,
            token: options.token ?? tokenSupplier
        });
    }

    /* reference the overridden records client */
    protected _records: Records | undefined;

    public get records(): Records {
        return (this._records ??= new Records(this._options));
    }

}

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

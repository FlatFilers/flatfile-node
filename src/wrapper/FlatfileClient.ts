import { FlatfileClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import urlJoin from "url-join";
import { CrossEnvConfig } from "@flatfile/cross-env-config";

CrossEnvConfig.alias("FLATFILE_API_URL", "AGENT_INTERNAL_URL");
CrossEnvConfig.alias("FLATFILE_BEARER_TOKEN", "FLATFILE_API_KEY");

export declare namespace FlatfileClient {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<string>;
    }
}

export class FlatfileClient extends FernClient {
    private token: string | undefined;

    constructor(options: FlatfileClient.Options = {}) {
        super({
            environment: options.environment ?? (() => {
                const url = CrossEnvConfig.get("FLATFILE_API_URL");
                if (url == undefined) {
                    throw new Error("FLATFILE_API_URL is not defined");
                }
                return urlJoin(url, "v1");
            })(),
            token: options.token ?? (() => {
                const token = CrossEnvConfig.get("FLATFILE_BEARER_TOKEN");
                if (token == undefined) {
                    throw new Error("FLATFILE_BEARER_TOKEN is not undefined");
                }
                return token;
            })
        });
    }
}

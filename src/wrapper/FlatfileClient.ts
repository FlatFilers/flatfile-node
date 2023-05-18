import { FlatfileClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import * as errors from "../errors";
import urlJoin from "url-join";

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
            environment: options.environment ?? () => {
                const url = process?.env?.FLATFILE_API_URL || process?.env?.AGENT_INTERNAL_URL;
                if (url == undefined) {
                    throw new Error("FLATFILE_API_URL and AGENT_INTERNAL_URL were both undefined");
                }
                return url;
            },
            token: options.token ?? () => {
                const token = process?.env?.FLATFILE_API_KEY || process?.env?.FLATFILE_BEARER_TOKEN;
                if (token == undefined) {
                    throw new Error("FLATFILE_API_KEY and FLATFILE_BEARER_TOKEN were both undefined");
                }
                return token;
            },
        });
    }
}

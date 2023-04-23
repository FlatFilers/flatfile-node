import { FlatfileClient as FernClient } from "../Client";
import * as environments from "../environments";
import * as core from "../core";
import * as errors from "../errors";
import urlJoin from "url-join";

export declare namespace FlatfileClient {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
    }
}

export class FlatfileClient extends FernClient {
    private token: string | undefined;

    constructor(options: FlatfileClient.Options) {
        super({
            environment: options.environment,
            token: async () => {
                if (this.token == null) {
                    const response = await core.fetcher({
                        url: urlJoin(
                            this.options.environment ?? environments.FlatfileEnvironment.Production,
                            "/auth/access-token"
                        ),
                        method: "POST",
                        body: {
                            clientId: options.clientId,
                            secret: options.clientSecret,
                        },
                    });
                    if (response.ok) {
                        this.token = (response.body as any)?.data?.accessToken;
                    }
                }
                if (this.token == null) {
                    throw new errors.FlatfileError({ message: "Failed to authenticate" });
                }
                return this.token;
            },
        });
    }
}

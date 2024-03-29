/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ExchangeTokenData: core.serialization.ObjectSchema<
    serializers.ExchangeTokenData.Raw,
    Flatfile.ExchangeTokenData
> = core.serialization.object({
    valid: core.serialization.boolean(),
    token: core.serialization.string().optional(),
    sentTo: core.serialization.string().optional(),
});

export declare namespace ExchangeTokenData {
    interface Raw {
        valid: boolean;
        token?: string | null;
        sentTo?: string | null;
    }
}

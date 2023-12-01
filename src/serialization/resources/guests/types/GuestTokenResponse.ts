/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const GuestTokenResponse: core.serialization.ObjectSchema<
    serializers.GuestTokenResponse.Raw,
    Flatfile.GuestTokenResponse
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../..")).GuestToken),
});

export declare namespace GuestTokenResponse {
    interface Raw {
        data: serializers.GuestToken.Raw;
    }
}
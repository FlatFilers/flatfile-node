/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AccessToken: core.serialization.ObjectSchema<serializers.AccessToken.Raw, Flatfile.AccessToken> =
    core.serialization.object({
        accessToken: core.serialization.string(),
        expiresIn: core.serialization.string(),
        expires: core.serialization.string(),
        email: core.serialization.string().optional(),
        userId: core.serialization.lazy(async () => (await import("../../..")).UserId).optional(),
        accountId: core.serialization.lazy(async () => (await import("../../..")).AccountId).optional(),
    });

export declare namespace AccessToken {
    interface Raw {
        accessToken: string;
        expiresIn: string;
        expires: string;
        email?: string | null;
        userId?: serializers.UserId.Raw | null;
        accountId?: serializers.AccountId.Raw | null;
    }
}
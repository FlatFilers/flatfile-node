/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, Flatfile.User> = core.serialization
    .object({
        id: core.serialization.lazy(async () => (await import("../../..")).UserId),
        idp: core.serialization.string(),
        idpRef: core.serialization.string().optional(),
        updatedAt: core.serialization.date(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).UserConfig));

export declare namespace User {
    interface Raw extends serializers.UserConfig.Raw {
        id: serializers.UserId.Raw;
        idp: string;
        idpRef?: string | null;
        updatedAt: string;
    }
}

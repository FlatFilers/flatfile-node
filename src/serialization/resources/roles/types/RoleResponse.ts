/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RoleResponse: core.serialization.ObjectSchema<serializers.RoleResponse.Raw, Flatfile.RoleResponse> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).RoleId),
        name: core.serialization.string(),
        accountId: core.serialization.lazy(async () => (await import("../../..")).AccountId),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace RoleResponse {
    interface Raw {
        id: serializers.RoleId.Raw;
        name: string;
        accountId: serializers.AccountId.Raw;
        createdAt: string;
        updatedAt: string;
    }
}
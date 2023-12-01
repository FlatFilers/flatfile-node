/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AssignRoleResponseData: core.serialization.ObjectSchema<
    serializers.AssignRoleResponseData.Raw,
    Flatfile.AssignRoleResponseData
> = core.serialization
    .object({
        roleId: core.serialization.lazy(async () => (await import("../../..")).RoleId),
        actorId: core.serialization.lazy(async () => (await import("../../..")).ActorIdUnion),
        resourceId: core.serialization.lazy(async () => (await import("../../..")).ResourceIdUnion),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).SuccessData));

export declare namespace AssignRoleResponseData {
    interface Raw extends serializers.SuccessData.Raw {
        roleId: serializers.RoleId.Raw;
        actorId: serializers.ActorIdUnion.Raw;
        resourceId: serializers.ResourceIdUnion.Raw;
    }
}
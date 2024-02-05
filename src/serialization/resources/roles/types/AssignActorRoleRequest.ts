/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const AssignActorRoleRequest: core.serialization.ObjectSchema<
    serializers.AssignActorRoleRequest.Raw,
    Flatfile.AssignActorRoleRequest
> = core.serialization.object({
    roleId: core.serialization.lazy(async () => (await import("../../..")).RoleId),
    resourceId: core.serialization.lazy(async () => (await import("../../..")).ResourceIdUnion),
});

export declare namespace AssignActorRoleRequest {
    interface Raw {
        roleId: serializers.RoleId.Raw;
        resourceId: serializers.ResourceIdUnion.Raw;
    }
}

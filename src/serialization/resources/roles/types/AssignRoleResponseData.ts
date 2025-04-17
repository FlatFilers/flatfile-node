/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { ActorRoleId } from "../../commons/types/ActorRoleId";
import { RoleId } from "../../commons/types/RoleId";
import { ActorIdUnion } from "../../commons/types/ActorIdUnion";
import { ResourceIdUnion } from "./ResourceIdUnion";

export const AssignRoleResponseData: core.serialization.ObjectSchema<
    serializers.AssignRoleResponseData.Raw,
    Flatfile.AssignRoleResponseData
> = core.serialization.object({
    id: ActorRoleId,
    roleId: RoleId,
    actorId: ActorIdUnion,
    resourceId: ResourceIdUnion,
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace AssignRoleResponseData {
    export interface Raw {
        id: ActorRoleId.Raw;
        roleId: RoleId.Raw;
        actorId: ActorIdUnion.Raw;
        resourceId: ResourceIdUnion.Raw;
        createdAt: string;
        updatedAt: string;
    }
}

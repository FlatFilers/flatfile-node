/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface AssignRoleResponseData {
    id: Flatfile.ActorRoleId;
    roleId: Flatfile.RoleId;
    actorId: Flatfile.ActorIdUnion;
    resourceId: Flatfile.ResourceIdUnion;
    createdAt: Date;
    updatedAt: Date;
}

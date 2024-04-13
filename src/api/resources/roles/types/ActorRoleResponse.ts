/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         id: "us_acr_YOUR_ID",
 *         roleId: "us_rol_YOUR_ID",
 *         actorId: "us_usr_YOUR_ID",
 *         resourceId: "us_acc_YOUR_ID",
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         id: "us_acr_YOUR_ID",
 *         roleId: "us_rol_YOUR_ID",
 *         actorId: "us_ag_YOUR_ID",
 *         resourceId: "us_env_YOUR_ID",
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export interface ActorRoleResponse {
    id: Flatfile.ActorRoleId;
    roleId: Flatfile.RoleId;
    actorId: Flatfile.ActorIdUnion;
    resourceId: Flatfile.ResourceIdUnion;
    createdAt: Date;
    updatedAt: Date;
}

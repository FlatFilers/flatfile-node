/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Properties used to create a new user
 *
 * @example
 *     {
 *         email: "john.smith@example.com",
 *         name: "John Smith",
 *         actorRoles: [{
 *                 roleId: "us_rol_YOUR_ID",
 *                 resourceId: "us_acc_YOUR_ID"
 *             }, {
 *                 roleId: "us_rol_YOUR_ID",
 *                 resourceId: "us_env_YOUR_ID"
 *             }]
 *     }
 */
export interface UserCreateAndInviteRequest {
    email: string;
    name: string;
    actorRoles: Flatfile.AssignActorRoleRequest[];
}

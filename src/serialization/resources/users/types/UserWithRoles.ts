/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { ActorRoleResponse } from "../../roles/types/ActorRoleResponse";
import { User } from "./User";

export const UserWithRoles: core.serialization.ObjectSchema<serializers.UserWithRoles.Raw, Flatfile.UserWithRoles> =
    core.serialization
        .object({
            actorRoles: core.serialization.list(ActorRoleResponse),
        })
        .extend(User);

export declare namespace UserWithRoles {
    interface Raw extends User.Raw {
        actorRoles: ActorRoleResponse.Raw[];
    }
}

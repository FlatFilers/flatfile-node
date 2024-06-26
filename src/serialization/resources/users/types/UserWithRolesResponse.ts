/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { UserWithRoles } from "./UserWithRoles";

export const UserWithRolesResponse: core.serialization.ObjectSchema<
    serializers.UserWithRolesResponse.Raw,
    Flatfile.UserWithRolesResponse
> = core.serialization.object({
    data: UserWithRoles,
});

export declare namespace UserWithRolesResponse {
    interface Raw {
        data: UserWithRoles.Raw;
    }
}

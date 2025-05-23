/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { RoleResponse } from "./RoleResponse";

export const ListRolesResponse: core.serialization.ObjectSchema<
    serializers.ListRolesResponse.Raw,
    Flatfile.ListRolesResponse
> = core.serialization.object({
    data: core.serialization.list(RoleResponse),
});

export declare namespace ListRolesResponse {
    export interface Raw {
        data: RoleResponse.Raw[];
    }
}

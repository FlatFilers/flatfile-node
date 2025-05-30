/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "./User";
import { Pagination } from "../../commons/types/Pagination";

export const ListUsersResponse: core.serialization.ObjectSchema<
    serializers.ListUsersResponse.Raw,
    Flatfile.ListUsersResponse
> = core.serialization.object({
    data: core.serialization.list(User),
    pagination: Pagination.optional(),
});

export declare namespace ListUsersResponse {
    export interface Raw {
        data: User.Raw[];
        pagination?: Pagination.Raw | null;
    }
}

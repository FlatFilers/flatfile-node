/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const ListUsersResponse: core.serialization.ObjectSchema<
    serializers.ListUsersResponse.Raw,
    Flatfile.ListUsersResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).User)),
});

export declare namespace ListUsersResponse {
    interface Raw {
        data: serializers.User.Raw[];
    }
}

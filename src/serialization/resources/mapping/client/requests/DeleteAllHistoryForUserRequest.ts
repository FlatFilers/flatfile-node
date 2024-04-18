/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flatfile from "../../../../../api";
import * as core from "../../../../../core";
import { EnvironmentId } from "../../../commons/types/EnvironmentId";

export const DeleteAllHistoryForUserRequest: core.serialization.Schema<
    serializers.DeleteAllHistoryForUserRequest.Raw,
    Flatfile.DeleteAllHistoryForUserRequest
> = core.serialization.object({
    environmentId: EnvironmentId.optional(),
});

export declare namespace DeleteAllHistoryForUserRequest {
    interface Raw {
        environmentId?: EnvironmentId.Raw | null;
    }
}

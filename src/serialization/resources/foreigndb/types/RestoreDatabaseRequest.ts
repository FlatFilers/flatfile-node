/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RestoreDatabaseRequest: core.serialization.ObjectSchema<
    serializers.RestoreDatabaseRequest.Raw,
    Flatfile.RestoreDatabaseRequest
> = core.serialization.object({
    fileId: core.serialization.string(),
});

export declare namespace RestoreDatabaseRequest {
    interface Raw {
        fileId: string;
    }
}

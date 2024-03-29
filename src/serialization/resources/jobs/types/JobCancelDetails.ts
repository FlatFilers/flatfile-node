/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobCancelDetails: core.serialization.ObjectSchema<
    serializers.JobCancelDetails.Raw,
    Flatfile.JobCancelDetails
> = core.serialization.object({
    info: core.serialization.string().optional(),
});

export declare namespace JobCancelDetails {
    interface Raw {
        info?: string | null;
    }
}

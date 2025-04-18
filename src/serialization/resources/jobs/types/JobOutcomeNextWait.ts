/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const JobOutcomeNextWait: core.serialization.ObjectSchema<
    serializers.JobOutcomeNextWait.Raw,
    Flatfile.JobOutcomeNextWait
> = core.serialization.object({
    fade: core.serialization.boolean().optional(),
    confetti: core.serialization.boolean().optional(),
});

export declare namespace JobOutcomeNextWait {
    export interface Raw {
        fade?: boolean | null;
        confetti?: boolean | null;
    }
}

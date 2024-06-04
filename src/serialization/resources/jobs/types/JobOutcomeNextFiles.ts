/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { JobOutcomeNextFileObject } from "./JobOutcomeNextFileObject";

export const JobOutcomeNextFiles: core.serialization.ObjectSchema<
    serializers.JobOutcomeNextFiles.Raw,
    Flatfile.JobOutcomeNextFiles
> = core.serialization.object({
    files: core.serialization.list(JobOutcomeNextFileObject),
    label: core.serialization.string().optional(),
});

export declare namespace JobOutcomeNextFiles {
    interface Raw {
        files: JobOutcomeNextFileObject.Raw[];
        label?: string | null;
    }
}
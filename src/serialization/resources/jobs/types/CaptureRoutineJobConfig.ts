/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { JobId } from "../../commons/types/JobId";
import { RunbookId } from "../../commons/types/RunbookId";

export const CaptureRoutineJobConfig: core.serialization.ObjectSchema<
    serializers.CaptureRoutineJobConfig.Raw,
    Flatfile.CaptureRoutineJobConfig
> = core.serialization.object({
    sourceJobId: JobId,
    runbookId: RunbookId,
});

export declare namespace CaptureRoutineJobConfig {
    export interface Raw {
        sourceJobId: JobId.Raw;
        runbookId: RunbookId.Raw;
    }
}

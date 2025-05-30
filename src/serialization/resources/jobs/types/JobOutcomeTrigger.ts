/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { JobOutcomeTriggerType } from "./JobOutcomeTriggerType";
import { JobOutcomeTriggerDetails } from "./JobOutcomeTriggerDetails";

export const JobOutcomeTrigger: core.serialization.Schema<
    serializers.JobOutcomeTrigger.Raw,
    Flatfile.JobOutcomeTrigger
> = core.serialization.undiscriminatedUnion([JobOutcomeTriggerType, JobOutcomeTriggerDetails]);

export declare namespace JobOutcomeTrigger {
    export type Raw = JobOutcomeTriggerType.Raw | JobOutcomeTriggerDetails.Raw;
}

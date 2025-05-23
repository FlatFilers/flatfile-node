/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { Job } from "./Job";
import { JobExecutionPlan } from "./JobExecutionPlan";

export const JobPlan: core.serialization.ObjectSchema<serializers.JobPlan.Raw, Flatfile.JobPlan> =
    core.serialization.object({
        job: Job,
        plan: JobExecutionPlan,
    });

export declare namespace JobPlan {
    export interface Raw {
        job: Job.Raw;
        plan: JobExecutionPlan.Raw;
    }
}

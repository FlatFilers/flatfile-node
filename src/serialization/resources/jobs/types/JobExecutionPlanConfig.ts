/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const JobExecutionPlanConfig: core.serialization.ObjectSchema<
    serializers.JobExecutionPlanConfig.Raw,
    Flatfile.JobExecutionPlanConfig
> = core.serialization
    .object({
        fileId: core.serialization.lazy(async () => (await import("../../..")).FileId),
        jobId: core.serialization.lazy(async () => (await import("../../..")).JobId),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).JobExecutionPlan));

export declare namespace JobExecutionPlanConfig {
    interface Raw extends serializers.JobExecutionPlan.Raw {
        fileId: serializers.FileId.Raw;
        jobId: serializers.JobId.Raw;
    }
}

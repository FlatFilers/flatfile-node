/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { JobUpdateConfig } from "./JobUpdateConfig";
import { JobStatus } from "./JobStatus";

export const JobUpdate: core.serialization.ObjectSchema<serializers.JobUpdate.Raw, Flatfile.JobUpdate> =
    core.serialization.object({
        config: JobUpdateConfig.optional(),
        status: JobStatus.optional(),
        progress: core.serialization.number().optional(),
        outcomeAcknowledgedAt: core.serialization.date().optional(),
        info: core.serialization.string().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
    });

export declare namespace JobUpdate {
    export interface Raw {
        config?: JobUpdateConfig.Raw | null;
        status?: JobStatus.Raw | null;
        progress?: number | null;
        outcomeAcknowledgedAt?: string | null;
        info?: string | null;
        metadata?: Record<string, any> | null;
    }
}

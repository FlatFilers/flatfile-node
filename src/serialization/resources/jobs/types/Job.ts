/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { JobId } from "../../commons/types/JobId";
import { ActorId } from "../../commons/types/ActorId";
import { JobConfig } from "./JobConfig";

export const Job: core.serialization.ObjectSchema<serializers.Job.Raw, Flatfile.Job> = core.serialization
    .object({
        id: JobId,
        createdBy: ActorId,
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        startedAt: core.serialization.date().optional(),
        finishedAt: core.serialization.date().optional(),
        outcomeAcknowledgedAt: core.serialization.date().optional(),
    })
    .extend(JobConfig);

export declare namespace Job {
    export interface Raw extends JobConfig.Raw {
        id: JobId.Raw;
        createdBy: ActorId.Raw;
        createdAt: string;
        updatedAt: string;
        startedAt?: string | null;
        finishedAt?: string | null;
        outcomeAcknowledgedAt?: string | null;
    }
}

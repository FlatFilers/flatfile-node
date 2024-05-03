/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { JobType } from "./JobType";
import { JobSource } from "./JobSource";
import { JobDestination } from "./JobDestination";
import { JobUpdateConfig } from "./JobUpdateConfig";
import { Trigger } from "./Trigger";
import { JobStatus } from "./JobStatus";
import { FileId } from "../../commons/types/FileId";
import { JobMode } from "./JobMode";
import { JobSubject } from "./JobSubject";
import { EnvironmentId } from "../../commons/types/EnvironmentId";
import { JobPartExecution } from "./JobPartExecution";
import { JobId } from "../../commons/types/JobId";

export const JobConfig: core.serialization.ObjectSchema<serializers.JobConfig.Raw, Flatfile.JobConfig> =
    core.serialization.object({
        type: JobType,
        operation: core.serialization.string(),
        source: JobSource,
        destination: JobDestination.optional(),
        config: JobUpdateConfig.optional(),
        trigger: Trigger.optional(),
        status: JobStatus.optional(),
        progress: core.serialization.number().optional(),
        fileId: FileId.optional(),
        mode: JobMode.optional(),
        input: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        subject: JobSubject.optional(),
        outcome: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        info: core.serialization.string().optional(),
        managed: core.serialization.boolean().optional(),
        environmentId: EnvironmentId.optional(),
        part: core.serialization.number().optional(),
        partData: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        partExecution: JobPartExecution.optional(),
        parentId: JobId.optional(),
        predecessorIds: core.serialization.list(JobId).optional(),
    });

export declare namespace JobConfig {
    interface Raw {
        type: JobType.Raw;
        operation: string;
        source: JobSource.Raw;
        destination?: JobDestination.Raw | null;
        config?: JobUpdateConfig.Raw | null;
        trigger?: Trigger.Raw | null;
        status?: JobStatus.Raw | null;
        progress?: number | null;
        fileId?: FileId.Raw | null;
        mode?: JobMode.Raw | null;
        input?: Record<string, any> | null;
        subject?: JobSubject.Raw | null;
        outcome?: Record<string, any> | null;
        info?: string | null;
        managed?: boolean | null;
        environmentId?: EnvironmentId.Raw | null;
        part?: number | null;
        partData?: Record<string, any> | null;
        partExecution?: JobPartExecution.Raw | null;
        parentId?: JobId.Raw | null;
        predecessorIds?: JobId.Raw[] | null;
    }
}

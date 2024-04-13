/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { RecordId } from "../../commons/types/RecordId";
import { VersionId } from "../../commons/types/VersionId";
import { CommitId } from "../../commons/types/CommitId";
import { ValidationMessage } from "./ValidationMessage";
import { RecordConfig } from "./RecordConfig";

export const RecordBase: core.serialization.ObjectSchema<serializers.RecordBase.Raw, Flatfile.RecordBase> =
    core.serialization.object({
        id: RecordId,
        versionId: VersionId.optional(),
        commitId: CommitId.optional(),
        valid: core.serialization.boolean().optional(),
        messages: core.serialization.list(ValidationMessage).optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        config: RecordConfig.optional(),
    });

export declare namespace RecordBase {
    interface Raw {
        id: RecordId.Raw;
        versionId?: VersionId.Raw | null;
        commitId?: CommitId.Raw | null;
        valid?: boolean | null;
        messages?: ValidationMessage.Raw[] | null;
        metadata?: Record<string, any> | null;
        config?: RecordConfig.Raw | null;
    }
}

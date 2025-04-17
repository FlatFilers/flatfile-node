/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { RecordsWithLinks } from "./RecordsWithLinks";
import { RecordCounts } from "./RecordCounts";
import { VersionId } from "../../commons/types/VersionId";
import { CommitId } from "../../commons/types/CommitId";
import { SuccessData } from "../../commons/types/SuccessData";
import { RecordWithLinks } from "./RecordWithLinks";

export const GetRecordsResponseData: core.serialization.ObjectSchema<
    serializers.GetRecordsResponseData.Raw,
    Flatfile.GetRecordsResponseData
> = core.serialization
    .object({
        records: RecordsWithLinks,
        counts: RecordCounts.optional(),
        versionId: VersionId.optional(),
        commitId: CommitId.optional(),
    })
    .extend(SuccessData);

export declare namespace GetRecordsResponseData {
    export interface Raw extends SuccessData.Raw {
        records: RecordsWithLinks.Raw;
        counts?: RecordCounts.Raw | null;
        versionId?: VersionId.Raw | null;
        commitId?: CommitId.Raw | null;
    }
}

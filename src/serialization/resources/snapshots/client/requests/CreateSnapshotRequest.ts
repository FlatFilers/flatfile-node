/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Flatfile from "../../../../../api/index";
import * as core from "../../../../../core";
import { SheetId } from "../../../commons/types/SheetId";

export const CreateSnapshotRequest: core.serialization.Schema<
    serializers.CreateSnapshotRequest.Raw,
    Flatfile.CreateSnapshotRequest
> = core.serialization.object({
    sheetId: SheetId,
    label: core.serialization.string().optional(),
    threadId: core.serialization.string().optional(),
});

export declare namespace CreateSnapshotRequest {
    export interface Raw {
        sheetId: SheetId.Raw;
        label?: string | null;
        threadId?: string | null;
    }
}

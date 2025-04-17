/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { DiffData } from "./DiffData";
import { Resolve } from "../../dataClips/types/Resolve";
import { RecordBase } from "./RecordBase";
import { DiffValue } from "./DiffValue";

export const DiffRecord: core.serialization.ObjectSchema<serializers.DiffRecord.Raw, Flatfile.DiffRecord> =
    core.serialization
        .object({
            values: DiffData,
            resolves: core.serialization.list(Resolve).optional(),
        })
        .extend(RecordBase);

export declare namespace DiffRecord {
    export interface Raw extends RecordBase.Raw {
        values: DiffData.Raw;
        resolves?: Resolve.Raw[] | null;
    }
}

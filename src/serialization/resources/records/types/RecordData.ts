/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { CellValue } from "./CellValue";

export const RecordData: core.serialization.Schema<serializers.RecordData.Raw, Flatfile.RecordData> =
    core.serialization.record(core.serialization.string(), CellValue);

export declare namespace RecordData {
    export type Raw = Record<string, CellValue.Raw>;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { DiffValue } from "./DiffValue";

export const DiffData: core.serialization.Schema<serializers.DiffData.Raw, Flatfile.DiffData> =
    core.serialization.record(core.serialization.string(), DiffValue);

export declare namespace DiffData {
    type Raw = Record<string, DiffValue.Raw>;
}

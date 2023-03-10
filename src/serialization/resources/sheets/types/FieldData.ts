/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const FieldData: core.serialization.ObjectSchema<serializers.FieldData.Raw, Flatfile.FieldData> =
    core.serialization
        .object({
            id: core.serialization.lazy(async () => (await import("../../..")).RecordId).optional(),
            counts: core.serialization.lazyObject(async () => (await import("../../..")).RecordCounts).optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).CellValue));

export declare namespace FieldData {
    interface Raw extends serializers.CellValue.Raw {
        id?: serializers.RecordId.Raw | null;
        counts?: serializers.RecordCounts.Raw | null;
    }
}

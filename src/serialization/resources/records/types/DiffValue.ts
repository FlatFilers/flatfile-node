/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { CellValueUnion } from "./CellValueUnion";
import { CellValue } from "./CellValue";

export const DiffValue: core.serialization.ObjectSchema<serializers.DiffValue.Raw, Flatfile.DiffValue> =
    core.serialization
        .object({
            snapshotValue: CellValueUnion.optional(),
            clipValue: CellValueUnion.optional(),
            warning: core.serialization.boolean().optional(),
            warnings: core.serialization.list(core.serialization.string()).optional(),
        })
        .extend(CellValue);

export declare namespace DiffValue {
    interface Raw extends CellValue.Raw {
        snapshotValue?: CellValueUnion.Raw | null;
        clipValue?: CellValueUnion.Raw | null;
        warning?: boolean | null;
        warnings?: string[] | null;
    }
}

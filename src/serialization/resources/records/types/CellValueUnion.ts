/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const CellValueUnion: core.serialization.Schema<serializers.CellValueUnion.Raw, Flatfile.CellValueUnion> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.number(),
        core.serialization.number(),
        core.serialization.number(),
        core.serialization.boolean(),
        core.serialization.string(),
        core.serialization.date(),
        core.serialization.list(core.serialization.string()),
    ]);

export declare namespace CellValueUnion {
    export type Raw = string | number | number | number | boolean | string | string | string[];
}

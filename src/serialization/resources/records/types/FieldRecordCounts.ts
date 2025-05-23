/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const FieldRecordCounts: core.serialization.ObjectSchema<
    serializers.FieldRecordCounts.Raw,
    Flatfile.FieldRecordCounts
> = core.serialization.object({
    total: core.serialization.number(),
    valid: core.serialization.number(),
    error: core.serialization.number(),
    empty: core.serialization.number(),
});

export declare namespace FieldRecordCounts {
    export interface Raw {
        total: number;
        valid: number;
        error: number;
        empty: number;
    }
}

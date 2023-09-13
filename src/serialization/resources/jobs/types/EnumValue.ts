/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const EnumValue: core.serialization.Schema<serializers.EnumValue.Raw, Flatfile.EnumValue> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.number(),
        core.serialization.boolean(),
    ]);

export declare namespace EnumValue {
    type Raw = string | number | boolean;
}
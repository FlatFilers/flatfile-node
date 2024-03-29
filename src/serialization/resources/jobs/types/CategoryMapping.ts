/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { EnumValue } from "./EnumValue";

export const CategoryMapping: core.serialization.ObjectSchema<
    serializers.CategoryMapping.Raw,
    Flatfile.CategoryMapping
> = core.serialization.object({
    sourceValue: EnumValue.optional(),
    destinationValue: EnumValue.optional(),
});

export declare namespace CategoryMapping {
    interface Raw {
        sourceValue?: EnumValue.Raw | null;
        destinationValue?: EnumValue.Raw | null;
    }
}

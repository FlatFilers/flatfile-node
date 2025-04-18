/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ArrayableProperty: core.serialization.ObjectSchema<
    serializers.ArrayableProperty.Raw,
    Flatfile.ArrayableProperty
> = core.serialization.object({
    isArray: core.serialization.boolean().optional(),
});

export declare namespace ArrayableProperty {
    export interface Raw {
        isArray?: boolean | null;
    }
}

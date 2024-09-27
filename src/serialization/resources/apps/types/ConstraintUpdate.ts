/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ConstraintUpdate: core.serialization.ObjectSchema<
    serializers.ConstraintUpdate.Raw,
    Flatfile.ConstraintUpdate
> = core.serialization.object({
    description: core.serialization.string().optional(),
    function: core.serialization.string().optional(),
    options: core.serialization.any().optional(),
    label: core.serialization.string().optional(),
});

export declare namespace ConstraintUpdate {
    interface Raw {
        description?: string | null;
        function?: string | null;
        options?: any | null;
        label?: string | null;
    }
}
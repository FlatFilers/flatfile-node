/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ActionConstraintHasAllValid: core.serialization.ObjectSchema<
    serializers.ActionConstraintHasAllValid.Raw,
    Flatfile.ActionConstraintHasAllValid
> = core.serialization.object({
    ignoreSelection: core.serialization.boolean().optional(),
});

export declare namespace ActionConstraintHasAllValid {
    interface Raw {
        ignoreSelection?: boolean | null;
    }
}
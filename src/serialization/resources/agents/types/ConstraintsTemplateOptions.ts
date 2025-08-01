/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ConstraintsTemplateOptions: core.serialization.ObjectSchema<
    serializers.ConstraintsTemplateOptions.Raw,
    Flatfile.ConstraintsTemplateOptions
> = core.serialization.object({
    namespace: core.serialization.string().optional(),
});

export declare namespace ConstraintsTemplateOptions {
    export interface Raw {
        namespace?: string | null;
    }
}

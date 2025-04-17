/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const UniqueConstraintConfig: core.serialization.ObjectSchema<
    serializers.UniqueConstraintConfig.Raw,
    Flatfile.UniqueConstraintConfig
> = core.serialization.object({
    caseSensitive: core.serialization.boolean().optional(),
    ignoreEmpty: core.serialization.boolean().optional(),
});

export declare namespace UniqueConstraintConfig {
    export interface Raw {
        caseSensitive?: boolean | null;
        ignoreEmpty?: boolean | null;
    }
}

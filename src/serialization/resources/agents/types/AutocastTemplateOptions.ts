/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const AutocastTemplateOptions: core.serialization.ObjectSchema<
    serializers.AutocastTemplateOptions.Raw,
    Flatfile.AutocastTemplateOptions
> = core.serialization.object({
    namespace: core.serialization.string().optional(),
    sheetSlug: core.serialization.string(),
    fieldFilters: core.serialization.list(core.serialization.string()).optional(),
    options: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
});

export declare namespace AutocastTemplateOptions {
    export interface Raw {
        namespace?: string | null;
        sheetSlug: string;
        fieldFilters?: string[] | null;
        options?: Record<string, any> | null;
    }
}

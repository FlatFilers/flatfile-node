/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ActionMountWorkbook: core.serialization.ObjectSchema<
    serializers.ActionMountWorkbook.Raw,
    Flatfile.ActionMountWorkbook
> = core.serialization.object({
    slugs: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ActionMountWorkbook {
    interface Raw {
        slugs?: string[] | null;
    }
}
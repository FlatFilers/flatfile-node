/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const WorkbookConfigSettings: core.serialization.ObjectSchema<
    serializers.WorkbookConfigSettings.Raw,
    Flatfile.WorkbookConfigSettings
> = core.serialization.object({
    trackChanges: core.serialization.boolean().optional(),
});

export declare namespace WorkbookConfigSettings {
    interface Raw {
        trackChanges?: boolean | null;
    }
}

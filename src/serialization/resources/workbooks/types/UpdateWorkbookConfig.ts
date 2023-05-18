/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const UpdateWorkbookConfig: core.serialization.ObjectSchema<
    serializers.UpdateWorkbookConfig.Raw,
    Flatfile.UpdateWorkbookConfig
> = core.serialization.object({
    name: core.serialization.string().optional(),
    labels: core.serialization.list(core.serialization.string()).optional(),
    spaceId: core.serialization.lazy(async () => (await import("../../..")).SpaceId).optional(),
    environmentId: core.serialization.lazy(async () => (await import("../../..")).EnvironmentId).optional(),
    sheets: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).SheetConfig))
        .optional(),
    actions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Action))
        .optional(),
});

export declare namespace UpdateWorkbookConfig {
    interface Raw {
        name?: string | null;
        labels?: string[] | null;
        spaceId?: serializers.SpaceId.Raw | null;
        environmentId?: serializers.EnvironmentId.Raw | null;
        sheets?: serializers.SheetConfig.Raw[] | null;
        actions?: serializers.Action.Raw[] | null;
    }
}
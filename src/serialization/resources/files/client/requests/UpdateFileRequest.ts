/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flatfile from "../../../../../api";
import * as core from "../../../../../core";

export const UpdateFileRequest: core.serialization.Schema<
    serializers.UpdateFileRequest.Raw,
    Flatfile.UpdateFileRequest
> = core.serialization.object({
    workbookId: core.serialization.lazy(async () => (await import("../../../..")).WorkbookId).optional(),
    name: core.serialization.string().optional(),
    mode: core.serialization.lazy(async () => (await import("../../../..")).Mode).optional(),
    status: core.serialization.lazy(async () => (await import("../../../..")).ModelFileStatusEnum).optional(),
});

export declare namespace UpdateFileRequest {
    interface Raw {
        workbookId?: serializers.WorkbookId.Raw | null;
        name?: string | null;
        mode?: serializers.Mode.Raw | null;
        status?: serializers.ModelFileStatusEnum.Raw | null;
    }
}

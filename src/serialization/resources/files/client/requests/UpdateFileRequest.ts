/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../../core";

export const UpdateFileRequest: core.serialization.Schema<
    serializers.UpdateFileRequest.Raw,
    Flatfile.UpdateFileRequest
> = core.serialization.object({
    workbookId: core.serialization.lazy(async () => (await import("../../../..")).WorkbookId),
    status: core.serialization.lazy(async () => (await import("../../../..")).ModelFileStatusEnum),
});

export declare namespace UpdateFileRequest {
    interface Raw {
        workbookId: serializers.WorkbookId.Raw;
        status: serializers.ModelFileStatusEnum.Raw;
    }
}

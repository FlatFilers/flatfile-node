/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SheetUpdate: core.serialization.ObjectSchema<serializers.SheetUpdate.Raw, Flatfile.SheetUpdate> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).SheetId).optional(),
        workbookId: core.serialization.lazy(async () => (await import("../../..")).WorkbookId).optional(),
        config: core.serialization.lazyObject(async () => (await import("../../..")).SheetConfig).optional(),
        countRecords: core.serialization.lazyObject(async () => (await import("../../..")).RecordCounts).optional(),
        namespace: core.serialization.string().optional(),
        updatedAt: core.serialization.date().optional(),
        createdAt: core.serialization.date().optional(),
    });

export declare namespace SheetUpdate {
    interface Raw {
        id?: serializers.SheetId.Raw | null;
        workbookId?: serializers.WorkbookId.Raw | null;
        config?: serializers.SheetConfig.Raw | null;
        countRecords?: serializers.RecordCounts.Raw | null;
        namespace?: string | null;
        updatedAt?: string | null;
        createdAt?: string | null;
    }
}

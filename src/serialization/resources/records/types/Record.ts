/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Record: core.serialization.ObjectSchema<serializers.Record.Raw, Flatfile.Record> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).RecordId),
        values: core.serialization.lazy(async () => (await import("../../..")).RecordData),
        valid: core.serialization.boolean().optional(),
        messages: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ValidationMessage))
            .optional(),
    });

export declare namespace Record {
    interface Raw {
        id: serializers.RecordId.Raw;
        values: serializers.RecordData.Raw;
        valid?: boolean | null;
        messages?: serializers.ValidationMessage.Raw[] | null;
        metadata?: Record<string, unknown> | null;
    }
}

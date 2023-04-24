/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const Edge: core.serialization.ObjectSchema<serializers.Edge.Raw, Flatfile.Edge> = core.serialization.object({
    sourceField: core.serialization.lazy(async () => (await import("../../..")).Property),
    destinationField: core.serialization.lazy(async () => (await import("../../..")).Property),
    preview: core.serialization.list(core.serialization.string()).optional(),
    enumDetails: core.serialization.lazyObject(async () => (await import("../../..")).EnumDetails).optional(),
    metadata: core.serialization.lazyObject(async () => (await import("../../..")).Metadata).optional(),
});

export declare namespace Edge {
    interface Raw {
        sourceField: serializers.Property.Raw;
        destinationField: serializers.Property.Raw;
        preview?: string[] | null;
        enumDetails?: serializers.EnumDetails.Raw | null;
        metadata?: serializers.Metadata.Raw | null;
    }
}

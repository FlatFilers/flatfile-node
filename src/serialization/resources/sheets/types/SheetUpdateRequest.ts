/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SheetUpdateRequest: core.serialization.ObjectSchema<
    serializers.SheetUpdateRequest.Raw,
    Flatfile.SheetUpdateRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    metadata: core.serialization.any().optional(),
});

export declare namespace SheetUpdateRequest {
    interface Raw {
        name?: string | null;
        slug?: string | null;
        metadata?: any | null;
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { GuideVersionResource } from "./GuideVersionResource";

export const GuideUpdateRequest: core.serialization.ObjectSchema<
    serializers.GuideUpdateRequest.Raw,
    Flatfile.GuideUpdateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
    slug: core.serialization.string().optional(),
    versions: core.serialization.list(GuideVersionResource).optional(),
    blocks: core.serialization
        .list(core.serialization.record(core.serialization.string(), core.serialization.any()).optional())
        .optional(),
    environmentId: core.serialization.string().optional(),
});

export declare namespace GuideUpdateRequest {
    export interface Raw {
        description?: string | null;
        title?: string | null;
        metadata?: Record<string, any> | null;
        slug?: string | null;
        versions?: GuideVersionResource.Raw[] | null;
        blocks?: (Record<string, any> | null | undefined)[] | null;
        environmentId?: string | null;
    }
}

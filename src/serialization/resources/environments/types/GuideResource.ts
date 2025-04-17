/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { GuideId } from "../../commons/types/GuideId";
import { GuideVersionResource } from "./GuideVersionResource";

export const GuideResource: core.serialization.ObjectSchema<serializers.GuideResource.Raw, Flatfile.GuideResource> =
    core.serialization.object({
        id: GuideId,
        description: core.serialization.string().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        slug: core.serialization.string(),
        title: core.serialization.string(),
        versions: core.serialization.list(GuideVersionResource),
        blocks: core.serialization.list(
            core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        ),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace GuideResource {
    export interface Raw {
        id: GuideId.Raw;
        description?: string | null;
        metadata?: Record<string, any> | null;
        slug: string;
        title: string;
        versions: GuideVersionResource.Raw[];
        blocks: (Record<string, any> | null | undefined)[];
        createdAt: string;
        updatedAt: string;
    }
}

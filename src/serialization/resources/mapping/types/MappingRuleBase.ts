/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const MappingRuleBase: core.serialization.ObjectSchema<
    serializers.MappingRuleBase.Raw,
    Flatfile.MappingRuleBase
> = core.serialization
    .object({
        id: core.serialization.lazy(async () => (await import("../../..")).MappingId),
        confidence: core.serialization.number().optional(),
        createdBy: core.serialization.lazy(async () => (await import("../../..")).UserId).optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).MappingRuleConfig));

export declare namespace MappingRuleBase {
    interface Raw extends serializers.MappingRuleConfig.Raw {
        id: serializers.MappingId.Raw;
        confidence?: number | null;
        createdBy?: serializers.UserId.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}

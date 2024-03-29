/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { MappingId } from "../../commons/types/MappingId";
import { UserId } from "../../commons/types/UserId";
import { MappingRuleConfig } from "./MappingRuleConfig";

export const MappingRule: core.serialization.ObjectSchema<serializers.MappingRule.Raw, Flatfile.MappingRule> =
    core.serialization
        .object({
            id: MappingId,
            confidence: core.serialization.number().optional(),
            createdBy: UserId.optional(),
            createdAt: core.serialization.date(),
            updatedAt: core.serialization.date(),
            deletedAt: core.serialization.date().optional(),
        })
        .extend(MappingRuleConfig);

export declare namespace MappingRule {
    interface Raw extends MappingRuleConfig.Raw {
        id: MappingId.Raw;
        confidence?: number | null;
        createdBy?: UserId.Raw | null;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string | null;
    }
}

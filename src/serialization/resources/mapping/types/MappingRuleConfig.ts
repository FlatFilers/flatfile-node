/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { UserId } from "../../commons/types/UserId";

export const MappingRuleConfig: core.serialization.ObjectSchema<
    serializers.MappingRuleConfig.Raw,
    Flatfile.MappingRuleConfig
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.string(),
    config: core.serialization.any().optional(),
    acceptedAt: core.serialization.date().optional(),
    acceptedBy: UserId.optional(),
    metadata: core.serialization.any().optional(),
});

export declare namespace MappingRuleConfig {
    export interface Raw {
        name: string;
        type: string;
        config?: any | null;
        acceptedAt?: string | null;
        acceptedBy?: UserId.Raw | null;
        metadata?: any | null;
    }
}

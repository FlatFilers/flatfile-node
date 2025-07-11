/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { EnvironmentId } from "../../commons/types/EnvironmentId";
import { SpaceId } from "../../commons/types/SpaceId";

export const AgentPromotionJobConfig: core.serialization.ObjectSchema<
    serializers.AgentPromotionJobConfig.Raw,
    Flatfile.AgentPromotionJobConfig
> = core.serialization.object({
    targetEnvironmentId: EnvironmentId,
    spaceId: SpaceId,
});

export declare namespace AgentPromotionJobConfig {
    export interface Raw {
        targetEnvironmentId: EnvironmentId.Raw;
        spaceId: SpaceId.Raw;
    }
}

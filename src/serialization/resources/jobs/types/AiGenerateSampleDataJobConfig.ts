/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SpaceId } from "../../commons/types/SpaceId";
import { AppId } from "../../commons/types/AppId";

export const AiGenerateSampleDataJobConfig: core.serialization.ObjectSchema<
    serializers.AiGenerateSampleDataJobConfig.Raw,
    Flatfile.AiGenerateSampleDataJobConfig
> = core.serialization.object({
    spaceId: SpaceId,
    appId: AppId,
});

export declare namespace AiGenerateSampleDataJobConfig {
    export interface Raw {
        spaceId: SpaceId.Raw;
        appId: AppId.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SpaceId } from "../../commons/types/SpaceId";
import { WorkbookId } from "../../commons/types/WorkbookId";

export const AiGenerateBlueprintConstraintsJobConfig: core.serialization.ObjectSchema<
    serializers.AiGenerateBlueprintConstraintsJobConfig.Raw,
    Flatfile.AiGenerateBlueprintConstraintsJobConfig
> = core.serialization.object({
    spaceId: SpaceId,
    workbookId: WorkbookId,
});

export declare namespace AiGenerateBlueprintConstraintsJobConfig {
    export interface Raw {
        spaceId: SpaceId.Raw;
        workbookId: WorkbookId.Raw;
    }
}

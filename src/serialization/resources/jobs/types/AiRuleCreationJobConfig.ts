/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { SheetId } from "../../commons/types/SheetId";

export const AiRuleCreationJobConfig: core.serialization.ObjectSchema<
    serializers.AiRuleCreationJobConfig.Raw,
    Flatfile.AiRuleCreationJobConfig
> = core.serialization.object({
    prompt: core.serialization.string(),
    sheetId: SheetId,
    fieldKey: core.serialization.string(),
    index: core.serialization.number().optional(),
});

export declare namespace AiRuleCreationJobConfig {
    interface Raw {
        prompt: string;
        sheetId: SheetId.Raw;
        fieldKey: string;
        index?: number | null;
    }
}

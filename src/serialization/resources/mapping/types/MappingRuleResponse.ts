/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const MappingRuleResponse: core.serialization.ObjectSchema<
    serializers.MappingRuleResponse.Raw,
    Flatfile.MappingRuleResponse
> = core.serialization.object({
    data: core.serialization.lazy(async () => (await import("../../..")).MappingRule),
});

export declare namespace MappingRuleResponse {
    interface Raw {
        data: serializers.MappingRule.Raw;
    }
}
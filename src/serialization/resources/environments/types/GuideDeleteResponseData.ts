/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const GuideDeleteResponseData: core.serialization.ObjectSchema<
    serializers.GuideDeleteResponseData.Raw,
    Flatfile.GuideDeleteResponseData
> = core.serialization.object({
    success: core.serialization.boolean(),
});

export declare namespace GuideDeleteResponseData {
    interface Raw {
        success: boolean;
    }
}

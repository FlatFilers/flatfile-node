/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const SuccessResponse: core.serialization.ObjectSchema<
    serializers.SuccessResponse.Raw,
    Flatfile.SuccessResponse
> = core.serialization.object({
    success: core.serialization.boolean(),
});

export declare namespace SuccessResponse {
    export interface Raw {
        success: boolean;
    }
}

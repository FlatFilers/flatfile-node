/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Success: core.serialization.ObjectSchema<serializers.Success.Raw, Flatfile.Success> =
    core.serialization.object({
        success: core.serialization.boolean(),
    });

export declare namespace Success {
    interface Raw {
        success: boolean;
    }
}

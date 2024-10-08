/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Guide: core.serialization.ObjectSchema<serializers.Guide.Raw, Flatfile.Guide> = core.serialization.object({
    content: core.serialization.string(),
});

export declare namespace Guide {
    interface Raw {
        content: string;
    }
}

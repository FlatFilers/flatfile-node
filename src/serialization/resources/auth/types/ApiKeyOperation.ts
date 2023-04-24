/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const ApiKeyOperation: core.serialization.ObjectSchema<
    serializers.ApiKeyOperation.Raw,
    Flatfile.ApiKeyOperation
> = core.serialization.object({
    path: core.serialization.string(),
    method: core.serialization.string(),
});

export declare namespace ApiKeyOperation {
    interface Raw {
        path: string;
        method: string;
    }
}

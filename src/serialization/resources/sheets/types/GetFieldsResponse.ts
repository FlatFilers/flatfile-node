/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const GetFieldsResponse: core.serialization.ObjectSchema<
    serializers.GetFieldsResponse.Raw,
    Flatfile.GetFieldsResponse
> = core.serialization.object({
    data: core.serialization.lazy(async () => (await import("../../..")).FieldResponse),
});

export declare namespace GetFieldsResponse {
    interface Raw {
        data: serializers.FieldResponse.Raw;
    }
}

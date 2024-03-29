/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { RecordCountsResponseData } from "./RecordCountsResponseData";

export const RecordCountsResponse: core.serialization.ObjectSchema<
    serializers.RecordCountsResponse.Raw,
    Flatfile.RecordCountsResponse
> = core.serialization.object({
    data: RecordCountsResponseData,
});

export declare namespace RecordCountsResponse {
    interface Raw {
        data: RecordCountsResponseData.Raw;
    }
}

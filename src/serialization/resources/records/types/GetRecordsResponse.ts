/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { GetRecordsResponseData } from "./GetRecordsResponseData";

export const GetRecordsResponse: core.serialization.ObjectSchema<
    serializers.GetRecordsResponse.Raw,
    Flatfile.GetRecordsResponse
> = core.serialization.object({
    data: GetRecordsResponseData,
});

export declare namespace GetRecordsResponse {
    export interface Raw {
        data: GetRecordsResponseData.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { DataClipResponse } from "./DataClipResponse";

export const ListDataClipResponse: core.serialization.ObjectSchema<
    serializers.ListDataClipResponse.Raw,
    Flatfile.ListDataClipResponse
> = core.serialization.object({
    data: core.serialization.list(DataClipResponse),
});

export declare namespace ListDataClipResponse {
    export interface Raw {
        data: DataClipResponse.Raw[];
    }
}

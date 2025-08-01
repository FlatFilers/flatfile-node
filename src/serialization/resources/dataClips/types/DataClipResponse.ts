/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { DataClip } from "./DataClip";

export const DataClipResponse: core.serialization.ObjectSchema<
    serializers.DataClipResponse.Raw,
    Flatfile.DataClipResponse
> = core.serialization.object({
    data: DataClip,
});

export declare namespace DataClipResponse {
    export interface Raw {
        data: DataClip.Raw;
    }
}

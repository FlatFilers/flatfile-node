/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { DetailedAgentLog } from "./DetailedAgentLog";

export const GetDetailedAgentLogResponse: core.serialization.ObjectSchema<
    serializers.GetDetailedAgentLogResponse.Raw,
    Flatfile.GetDetailedAgentLogResponse
> = core.serialization.object({
    data: DetailedAgentLog,
});

export declare namespace GetDetailedAgentLogResponse {
    export interface Raw {
        data: DetailedAgentLog.Raw;
    }
}

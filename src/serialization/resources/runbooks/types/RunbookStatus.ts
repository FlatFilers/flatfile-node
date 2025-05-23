/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const RunbookStatus: core.serialization.Schema<serializers.RunbookStatus.Raw, Flatfile.RunbookStatus> =
    core.serialization.enum_(["CREATED", "RECORDING", "EXECUTING", "WAITING", "COMPLETED", "FAILED", "CANCELED"]);

export declare namespace RunbookStatus {
    export type Raw = "CREATED" | "RECORDING" | "EXECUTING" | "WAITING" | "COMPLETED" | "FAILED" | "CANCELED";
}

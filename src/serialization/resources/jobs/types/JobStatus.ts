/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const JobStatus: core.serialization.Schema<serializers.JobStatus.Raw, Flatfile.JobStatus> =
    core.serialization.enum_([
        "created",
        "planning",
        "scheduled",
        "ready",
        "executing",
        "complete",
        "failed",
        "canceled",
        "waiting",
    ]);

export declare namespace JobStatus {
    export type Raw =
        | "created"
        | "planning"
        | "scheduled"
        | "ready"
        | "executing"
        | "complete"
        | "failed"
        | "canceled"
        | "waiting";
}

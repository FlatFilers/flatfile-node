/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { JobAckDetails } from "../types/JobAckDetails";

export const Request: core.serialization.Schema<serializers.jobs.ack.Request.Raw, Flatfile.JobAckDetails | undefined> =
    JobAckDetails.optional();

export declare namespace Request {
    export type Raw = JobAckDetails.Raw | null | undefined;
}

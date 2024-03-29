/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Pagination } from "../../commons/types/Pagination";
import { Job } from "./Job";

export const ListJobsResponse: core.serialization.ObjectSchema<
    serializers.ListJobsResponse.Raw,
    Flatfile.ListJobsResponse
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(Job),
});

export declare namespace ListJobsResponse {
    interface Raw {
        pagination?: Pagination.Raw | null;
        data: Job.Raw[];
    }
}

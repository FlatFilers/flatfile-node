/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobOperationType: core.serialization.Schema<serializers.JobOperationType.Raw, Flatfile.JobOperationType> =
    core.serialization.enum_(["EXTRACT", "MAP"]);

export declare namespace JobOperationType {
    type Raw = "EXTRACT" | "MAP";
}

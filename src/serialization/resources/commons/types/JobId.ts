/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobId: core.serialization.Schema<serializers.JobId.Raw, Flatfile.JobId> = core.serialization.string();

export declare namespace JobId {
    type Raw = string;
}

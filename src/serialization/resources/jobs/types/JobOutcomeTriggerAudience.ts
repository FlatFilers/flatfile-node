/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobOutcomeTriggerAudience: core.serialization.Schema<
    serializers.JobOutcomeTriggerAudience.Raw,
    Flatfile.JobOutcomeTriggerAudience
> = core.serialization.enum_(["originator", "all"]);

export declare namespace JobOutcomeTriggerAudience {
    type Raw = "originator" | "all";
}
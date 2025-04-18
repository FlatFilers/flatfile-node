/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const JobOutcomeTriggerType: core.serialization.Schema<
    serializers.JobOutcomeTriggerType.Raw,
    Flatfile.JobOutcomeTriggerType
> = core.serialization.enum_(["manual", "automatic", "automatic_silent"]);

export declare namespace JobOutcomeTriggerType {
    export type Raw = "manual" | "automatic" | "automatic_silent";
}

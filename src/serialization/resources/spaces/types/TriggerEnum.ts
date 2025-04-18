/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const TriggerEnum: core.serialization.Schema<serializers.TriggerEnum.Raw, Flatfile.TriggerEnum> =
    core.serialization.enum_(["first", "hover", "event", "manual"]);

export declare namespace TriggerEnum {
    export type Raw = "first" | "hover" | "event" | "manual";
}

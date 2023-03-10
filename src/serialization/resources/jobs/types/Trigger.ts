/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Trigger: core.serialization.Schema<serializers.Trigger.Raw, Flatfile.Trigger> = core.serialization.enum_([
    "manual",
    "immediate",
]);

export declare namespace Trigger {
    type Raw = "manual" | "immediate";
}

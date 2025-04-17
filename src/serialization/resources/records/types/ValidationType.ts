/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ValidationType: core.serialization.Schema<serializers.ValidationType.Raw, Flatfile.ValidationType> =
    core.serialization.enum_(["error", "warn", "info"]);

export declare namespace ValidationType {
    export type Raw = "error" | "warn" | "info";
}

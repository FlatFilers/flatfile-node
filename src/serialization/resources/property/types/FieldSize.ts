/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const FieldSize: core.serialization.Schema<serializers.FieldSize.Raw, Flatfile.FieldSize> =
    core.serialization.enum_(["xs", "s", "m", "l", "xl"]);

export declare namespace FieldSize {
    type Raw = "xs" | "s" | "m" | "l" | "xl";
}
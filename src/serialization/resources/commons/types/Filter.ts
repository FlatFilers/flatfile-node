/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Filter: core.serialization.Schema<serializers.Filter.Raw, Flatfile.Filter> = core.serialization.enum_([
    "valid",
    "error",
    "all",
    "none",
]);

export declare namespace Filter {
    type Raw = "valid" | "error" | "all" | "none";
}

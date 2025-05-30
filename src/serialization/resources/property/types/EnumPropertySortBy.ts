/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const EnumPropertySortBy: core.serialization.Schema<
    serializers.EnumPropertySortBy.Raw,
    Flatfile.EnumPropertySortBy
> = core.serialization.enum_(["label", "value", "ordinal"]);

export declare namespace EnumPropertySortBy {
    export type Raw = "label" | "value" | "ordinal";
}

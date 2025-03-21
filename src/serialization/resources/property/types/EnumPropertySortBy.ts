/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const EnumPropertySortBy: core.serialization.Schema<
    serializers.EnumPropertySortBy.Raw,
    Flatfile.EnumPropertySortBy
> = core.serialization.enum_(["label", "value", "ordinal"]);

export declare namespace EnumPropertySortBy {
    type Raw = "label" | "value" | "ordinal";
}

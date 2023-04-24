/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const SortField: core.serialization.Schema<serializers.SortField.Raw, Flatfile.SortField> =
    core.serialization.string();

export declare namespace SortField {
    type Raw = string;
}

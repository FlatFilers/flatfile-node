/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const SearchField: core.serialization.Schema<serializers.SearchField.Raw, Flatfile.SearchField> =
    core.serialization.string();

export declare namespace SearchField {
    export type Raw = string;
}

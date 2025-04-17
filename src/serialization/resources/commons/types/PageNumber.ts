/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const PageNumber: core.serialization.Schema<serializers.PageNumber.Raw, Flatfile.PageNumber> =
    core.serialization.number();

export declare namespace PageNumber {
    export type Raw = number;
}

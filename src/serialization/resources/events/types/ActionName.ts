/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ActionName: core.serialization.Schema<serializers.ActionName.Raw, Flatfile.ActionName> =
    core.serialization.string();

export declare namespace ActionName {
    export type Raw = string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const FieldKey: core.serialization.Schema<serializers.FieldKey.Raw, Flatfile.FieldKey> =
    core.serialization.string();

export declare namespace FieldKey {
    export type Raw = string;
}

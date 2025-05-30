/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const RawKey: core.serialization.Schema<serializers.RawKey.Raw, Flatfile.RawKey> = core.serialization.string();

export declare namespace RawKey {
    export type Raw = string;
}

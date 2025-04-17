/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const GuestId: core.serialization.Schema<serializers.GuestId.Raw, Flatfile.GuestId> =
    core.serialization.string();

export declare namespace GuestId {
    export type Raw = string;
}

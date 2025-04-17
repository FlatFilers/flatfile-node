/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ActorId: core.serialization.Schema<serializers.ActorId.Raw, Flatfile.ActorId> =
    core.serialization.string();

export declare namespace ActorId {
    export type Raw = string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const SpaceConfigId: core.serialization.Schema<serializers.SpaceConfigId.Raw, Flatfile.SpaceConfigId> =
    core.serialization.string();

export declare namespace SpaceConfigId {
    export type Raw = string;
}

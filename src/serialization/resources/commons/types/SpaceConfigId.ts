/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const SpaceConfigId: core.serialization.Schema<serializers.SpaceConfigId.Raw, Flatfile.SpaceConfigId> =
    core.serialization.string();

export declare namespace SpaceConfigId {
    type Raw = string;
}

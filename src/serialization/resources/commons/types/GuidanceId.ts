/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const GuidanceId: core.serialization.Schema<serializers.GuidanceId.Raw, Flatfile.GuidanceId> =
    core.serialization.string();

export declare namespace GuidanceId {
    type Raw = string;
}

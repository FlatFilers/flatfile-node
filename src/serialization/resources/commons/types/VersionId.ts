/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const VersionId: core.serialization.Schema<serializers.VersionId.Raw, Flatfile.VersionId> =
    core.serialization.string();

export declare namespace VersionId {
    export type Raw = string;
}

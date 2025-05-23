/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const CommitId: core.serialization.Schema<serializers.CommitId.Raw, Flatfile.CommitId> =
    core.serialization.string();

export declare namespace CommitId {
    export type Raw = string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const RunbookId: core.serialization.Schema<serializers.RunbookId.Raw, Flatfile.RunbookId> =
    core.serialization.string();

export declare namespace RunbookId {
    type Raw = string;
}

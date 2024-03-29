/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const FileId: core.serialization.Schema<serializers.FileId.Raw, Flatfile.FileId> = core.serialization.string();

export declare namespace FileId {
    type Raw = string;
}

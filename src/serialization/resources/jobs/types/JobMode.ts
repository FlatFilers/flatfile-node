/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const JobMode: core.serialization.Schema<serializers.JobMode.Raw, Flatfile.JobMode> = core.serialization.enum_([
    "foreground",
    "background",
    "toolbarBlocking",
]);

export declare namespace JobMode {
    type Raw = "foreground" | "background" | "toolbarBlocking";
}

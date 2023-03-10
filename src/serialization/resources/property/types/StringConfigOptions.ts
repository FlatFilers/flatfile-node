/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const StringConfigOptions: core.serialization.Schema<
    serializers.StringConfigOptions.Raw,
    Flatfile.StringConfigOptions
> = core.serialization.enum_(["tiny", "normal", "medium", "long"]);

export declare namespace StringConfigOptions {
    type Raw = "tiny" | "normal" | "medium" | "long";
}

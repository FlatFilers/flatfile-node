/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Records: core.serialization.Schema<serializers.Records.Raw, Flatfile.Records> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).Record)
);

export declare namespace Records {
    type Raw = serializers.Record.Raw[];
}
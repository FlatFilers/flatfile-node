/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const FileDeletedEvent: core.serialization.ObjectSchema<
    serializers.FileDeletedEvent.Raw,
    Flatfile.FileDeletedEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace FileDeletedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}

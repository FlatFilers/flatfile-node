/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const RecordsCreatedEvent: core.serialization.ObjectSchema<
    serializers.RecordsCreatedEvent.Raw,
    Flatfile.RecordsCreatedEvent
> = core.serialization
    .object({
        payload: core.serialization.lazyObject(async () => (await import("../../..")).RecordsPayload),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace RecordsCreatedEvent {
    interface Raw extends serializers.BaseEvent.Raw {
        payload: serializers.RecordsPayload.Raw;
    }
}

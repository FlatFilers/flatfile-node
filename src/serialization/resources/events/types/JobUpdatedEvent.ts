/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobUpdatedEvent: core.serialization.ObjectSchema<
    serializers.JobUpdatedEvent.Raw,
    Flatfile.JobUpdatedEvent
> = core.serialization
    .object({
        payload: core.serialization.lazyObject(async () => (await import("../../..")).JobPayload),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace JobUpdatedEvent {
    interface Raw extends serializers.BaseEvent.Raw {
        payload: serializers.JobPayload.Raw;
    }
}

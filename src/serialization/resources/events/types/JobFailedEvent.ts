/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const JobFailedEvent: core.serialization.ObjectSchema<serializers.JobFailedEvent.Raw, Flatfile.JobFailedEvent> =
    core.serialization
        .object({
            payload: core.serialization.lazyObject(async () => (await import("../../..")).JobFailedPayload),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace JobFailedEvent {
    interface Raw extends serializers.BaseEvent.Raw {
        payload: serializers.JobFailedPayload.Raw;
    }
}

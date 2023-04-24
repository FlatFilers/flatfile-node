/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const UserOfflineEvent: core.serialization.ObjectSchema<
    serializers.UserOfflineEvent.Raw,
    Flatfile.UserOfflineEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace UserOfflineEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}

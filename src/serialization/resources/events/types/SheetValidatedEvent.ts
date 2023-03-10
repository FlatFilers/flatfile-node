/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const SheetValidatedEvent: core.serialization.ObjectSchema<
    serializers.SheetValidatedEvent.Raw,
    Flatfile.SheetValidatedEvent
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseEvent));

export declare namespace SheetValidatedEvent {
    interface Raw extends serializers.BaseEvent.Raw {}
}

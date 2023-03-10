/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const ValidationMessage: core.serialization.ObjectSchema<
    serializers.ValidationMessage.Raw,
    Flatfile.ValidationMessage
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).ValidationType).optional(),
    source: core.serialization.lazy(async () => (await import("../../..")).ValidationSource).optional(),
    message: core.serialization.string().optional(),
});

export declare namespace ValidationMessage {
    interface Raw {
        type?: serializers.ValidationType.Raw | null;
        source?: serializers.ValidationSource.Raw | null;
        message?: string | null;
    }
}

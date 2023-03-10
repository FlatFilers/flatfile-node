/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const StringProperty: core.serialization.ObjectSchema<serializers.StringProperty.Raw, Flatfile.StringProperty> =
    core.serialization
        .object({
            config: core.serialization.lazyObject(async () => (await import("../../..")).StringConfig).optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseProperty));

export declare namespace StringProperty {
    interface Raw extends serializers.BaseProperty.Raw {
        config?: serializers.StringConfig.Raw | null;
    }
}

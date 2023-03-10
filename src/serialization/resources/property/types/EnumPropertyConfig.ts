/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const EnumPropertyConfig: core.serialization.ObjectSchema<
    serializers.EnumPropertyConfig.Raw,
    Flatfile.EnumPropertyConfig
> = core.serialization.object({
    allowCustom: core.serialization.property("allow_custom", core.serialization.boolean()),
    options: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).EnumPropertyOption)
    ),
});

export declare namespace EnumPropertyConfig {
    interface Raw {
        allow_custom: boolean;
        options: serializers.EnumPropertyOption.Raw[];
    }
}

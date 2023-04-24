/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const ReferencePropertyConfig: core.serialization.ObjectSchema<
    serializers.ReferencePropertyConfig.Raw,
    Flatfile.ReferencePropertyConfig
> = core.serialization.object({
    ref: core.serialization.string(),
    key: core.serialization.string(),
    relationship: core.serialization.lazy(async () => (await import("../../..")).ReferencePropertyRelationship),
});

export declare namespace ReferencePropertyConfig {
    interface Raw {
        ref: string;
        key: string;
        relationship: serializers.ReferencePropertyRelationship.Raw;
    }
}

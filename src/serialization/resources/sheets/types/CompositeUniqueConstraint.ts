/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CompositeUniqueConstraint: core.serialization.ObjectSchema<
    serializers.CompositeUniqueConstraint.Raw,
    Flatfile.CompositeUniqueConstraint
> = core.serialization.object({
    name: core.serialization.string(),
    fields: core.serialization.list(core.serialization.string()),
    strategy: core.serialization.lazy(async () => (await import("../../..")).CompositeUniqueConstraintStrategy),
});

export declare namespace CompositeUniqueConstraint {
    interface Raw {
        name: string;
        fields: string[];
        strategy: serializers.CompositeUniqueConstraintStrategy.Raw;
    }
}
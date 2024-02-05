/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const ExternalConstraint: core.serialization.ObjectSchema<
    serializers.ExternalConstraint.Raw,
    Flatfile.ExternalConstraint
> = core.serialization.object({
    validator: core.serialization.string(),
    config: core.serialization.any().optional(),
});

export declare namespace ExternalConstraint {
    interface Raw {
        validator: string;
        config?: any | null;
    }
}

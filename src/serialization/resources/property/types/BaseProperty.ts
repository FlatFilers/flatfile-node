/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Constraint } from "./Constraint";
import { FieldAppearance } from "./FieldAppearance";

export const BaseProperty: core.serialization.ObjectSchema<serializers.BaseProperty.Raw, Flatfile.BaseProperty> =
    core.serialization.object({
        key: core.serialization.string(),
        label: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        constraints: core.serialization.list(Constraint).optional(),
        readonly: core.serialization.boolean().optional(),
        appearance: FieldAppearance.optional(),
        metadata: core.serialization.any().optional(),
        treatments: core.serialization.list(core.serialization.string()).optional(),
        alternativeNames: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace BaseProperty {
    interface Raw {
        key: string;
        label?: string | null;
        description?: string | null;
        constraints?: Constraint.Raw[] | null;
        readonly?: boolean | null;
        appearance?: FieldAppearance.Raw | null;
        metadata?: any | null;
        treatments?: string[] | null;
        alternativeNames?: string[] | null;
    }
}

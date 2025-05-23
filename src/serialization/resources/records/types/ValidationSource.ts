/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ValidationSource: core.serialization.Schema<serializers.ValidationSource.Raw, Flatfile.ValidationSource> =
    core.serialization.enum_([
        "required-constraint",
        "unique-constraint",
        "custom-logic",
        "unlinked",
        "invalid-option",
        "is-artifact",
    ]);

export declare namespace ValidationSource {
    export type Raw =
        | "required-constraint"
        | "unique-constraint"
        | "custom-logic"
        | "unlinked"
        | "invalid-option"
        | "is-artifact";
}

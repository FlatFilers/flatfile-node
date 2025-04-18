/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ResolveTo: core.serialization.Schema<serializers.ResolveTo.Raw, Flatfile.ResolveTo> =
    core.serialization.enum_(["clip", "main", "snapshot"]);

export declare namespace ResolveTo {
    export type Raw = "clip" | "main" | "snapshot";
}

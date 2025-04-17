/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const SchemaDiffEnum: core.serialization.Schema<serializers.SchemaDiffEnum.Raw, Flatfile.SchemaDiffEnum> =
    core.serialization.enum_(["added", "removed", "unchanged"]);

export declare namespace SchemaDiffEnum {
    export type Raw = "added" | "removed" | "unchanged";
}

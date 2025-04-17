/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const RoutineId: core.serialization.Schema<serializers.RoutineId.Raw, Flatfile.RoutineId> =
    core.serialization.string();

export declare namespace RoutineId {
    export type Raw = string;
}

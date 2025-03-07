/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Routine } from "./Routine";

export const RoutineResponse: core.serialization.ObjectSchema<
    serializers.RoutineResponse.Raw,
    Flatfile.RoutineResponse
> = core.serialization.object({
    data: Routine,
});

export declare namespace RoutineResponse {
    interface Raw {
        data: Routine.Raw;
    }
}

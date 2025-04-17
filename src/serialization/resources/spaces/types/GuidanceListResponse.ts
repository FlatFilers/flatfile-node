/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { GuidanceResource } from "./GuidanceResource";

export const GuidanceListResponse: core.serialization.ObjectSchema<
    serializers.GuidanceListResponse.Raw,
    Flatfile.GuidanceListResponse
> = core.serialization.object({
    data: core.serialization.list(GuidanceResource),
});

export declare namespace GuidanceListResponse {
    export interface Raw {
        data: GuidanceResource.Raw[];
    }
}

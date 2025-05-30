/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SpaceDraft } from "./SpaceDraft";

export const SpaceDraftListResponse: core.serialization.ObjectSchema<
    serializers.SpaceDraftListResponse.Raw,
    Flatfile.SpaceDraftListResponse
> = core.serialization.object({
    data: core.serialization.list(SpaceDraft),
});

export declare namespace SpaceDraftListResponse {
    export interface Raw {
        data: SpaceDraft.Raw[];
    }
}

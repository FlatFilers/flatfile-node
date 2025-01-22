/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { GuideResource } from "./GuideResource";

export const GuideListResponse: core.serialization.ObjectSchema<
    serializers.GuideListResponse.Raw,
    Flatfile.GuideListResponse
> = core.serialization.object({
    data: core.serialization.list(GuideResource),
});

export declare namespace GuideListResponse {
    interface Raw {
        data: GuideResource.Raw[];
    }
}

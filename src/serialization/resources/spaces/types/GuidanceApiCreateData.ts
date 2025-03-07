/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { GuidanceOptions } from "./GuidanceOptions";

export const GuidanceApiCreateData: core.serialization.ObjectSchema<
    serializers.GuidanceApiCreateData.Raw,
    Flatfile.GuidanceApiCreateData
> = core.serialization.object({
    guideSlug: core.serialization.string(),
    options: GuidanceOptions,
});

export declare namespace GuidanceApiCreateData {
    interface Raw {
        guideSlug: string;
        options: GuidanceOptions.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const DistinctDeprecated: core.serialization.Schema<
    serializers.DistinctDeprecated.Raw,
    Flatfile.DistinctDeprecated
> = core.serialization.boolean();

export declare namespace DistinctDeprecated {
    export type Raw = boolean;
}

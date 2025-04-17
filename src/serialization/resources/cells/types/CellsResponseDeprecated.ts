/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { CellsResponseDataDeprecated } from "./CellsResponseDataDeprecated";
import { CellValueWithCountsDeprecated } from "./CellValueWithCountsDeprecated";

export const CellsResponseDeprecated: core.serialization.ObjectSchema<
    serializers.CellsResponseDeprecated.Raw,
    Flatfile.CellsResponseDeprecated
> = core.serialization.object({
    data: CellsResponseDataDeprecated,
});

export declare namespace CellsResponseDeprecated {
    export interface Raw {
        data: CellsResponseDataDeprecated.Raw;
    }
}

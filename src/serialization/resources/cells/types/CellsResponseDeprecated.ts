/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CellsResponseDeprecated: core.serialization.ObjectSchema<
    serializers.CellsResponseDeprecated.Raw,
    Flatfile.CellsResponseDeprecated
> = core.serialization.object({
    data: core.serialization.lazy(async () => (await import("../../..")).CellsResponseDataDeprecated),
});

export declare namespace CellsResponseDeprecated {
    interface Raw {
        data: serializers.CellsResponseDataDeprecated.Raw;
    }
}
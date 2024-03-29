/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Sheet } from "./Sheet";

export const ListSheetsResponse: core.serialization.ObjectSchema<
    serializers.ListSheetsResponse.Raw,
    Flatfile.ListSheetsResponse
> = core.serialization.object({
    data: core.serialization.list(Sheet),
});

export declare namespace ListSheetsResponse {
    interface Raw {
        data: Sheet.Raw[];
    }
}

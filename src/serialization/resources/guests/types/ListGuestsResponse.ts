/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { Guest } from "./Guest";

export const ListGuestsResponse: core.serialization.ObjectSchema<
    serializers.ListGuestsResponse.Raw,
    Flatfile.ListGuestsResponse
> = core.serialization.object({
    data: core.serialization.list(Guest),
});

export declare namespace ListGuestsResponse {
    export interface Raw {
        data: Guest.Raw[];
    }
}

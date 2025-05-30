/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { ExchangeTokenData } from "./ExchangeTokenData";

export const ExchangeTokenResponse: core.serialization.ObjectSchema<
    serializers.ExchangeTokenResponse.Raw,
    Flatfile.ExchangeTokenResponse
> = core.serialization.object({
    data: ExchangeTokenData,
});

export declare namespace ExchangeTokenResponse {
    export interface Raw {
        data: ExchangeTokenData.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { PersonalAccessToken } from "./PersonalAccessToken";

export const PersonalAccessTokensResponse: core.serialization.ObjectSchema<
    serializers.PersonalAccessTokensResponse.Raw,
    Flatfile.PersonalAccessTokensResponse
> = core.serialization.object({
    data: core.serialization.list(PersonalAccessToken),
});

export declare namespace PersonalAccessTokensResponse {
    export interface Raw {
        data: PersonalAccessToken.Raw[];
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { PersonalAccessToken } from "./PersonalAccessToken";

export const CreatePersonalAccessTokenResponseData: core.serialization.ObjectSchema<
    serializers.CreatePersonalAccessTokenResponseData.Raw,
    Flatfile.CreatePersonalAccessTokenResponseData
> = core.serialization.object({
    token: core.serialization.string(),
    personalAccessToken: PersonalAccessToken,
});

export declare namespace CreatePersonalAccessTokenResponseData {
    interface Raw {
        token: string;
        personalAccessToken: PersonalAccessToken.Raw;
    }
}

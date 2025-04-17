/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { Prompt } from "./Prompt";

export const PromptResponse: core.serialization.ObjectSchema<serializers.PromptResponse.Raw, Flatfile.PromptResponse> =
    core.serialization.object({
        data: Prompt,
    });

export declare namespace PromptResponse {
    export interface Raw {
        data: Prompt.Raw;
    }
}

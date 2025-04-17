/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { Pagination } from "../../commons/types/Pagination";
import { Prompt } from "./Prompt";

export const PromptsResponse: core.serialization.ObjectSchema<
    serializers.PromptsResponse.Raw,
    Flatfile.PromptsResponse
> = core.serialization.object({
    pagination: Pagination.optional(),
    data: core.serialization.list(Prompt),
});

export declare namespace PromptsResponse {
    export interface Raw {
        pagination?: Pagination.Raw | null;
        data: Prompt.Raw[];
    }
}

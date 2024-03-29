/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Agent } from "./Agent";

export const ListAgentsResponse: core.serialization.ObjectSchema<
    serializers.ListAgentsResponse.Raw,
    Flatfile.ListAgentsResponse
> = core.serialization.object({
    data: core.serialization.list(Agent).optional(),
});

export declare namespace ListAgentsResponse {
    interface Raw {
        data?: Agent.Raw[] | null;
    }
}

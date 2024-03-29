/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { AgentId } from "../../commons/types/AgentId";
import { AgentConfig } from "./AgentConfig";

export const Agent: core.serialization.ObjectSchema<serializers.Agent.Raw, Flatfile.Agent> = core.serialization
    .object({
        id: AgentId,
    })
    .extend(AgentConfig);

export declare namespace Agent {
    interface Raw extends AgentConfig.Raw {
        id: AgentId.Raw;
    }
}

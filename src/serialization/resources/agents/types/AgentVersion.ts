/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { AgentVersionId } from "../../commons/types/AgentVersionId";
import { AgentId } from "../../commons/types/AgentId";
import { AgentConfig } from "./AgentConfig";

export const AgentVersion: core.serialization.ObjectSchema<serializers.AgentVersion.Raw, Flatfile.AgentVersion> =
    core.serialization
        .object({
            id: AgentVersionId,
            version: core.serialization.number(),
            origin: core.serialization.number(),
            createdAt: core.serialization.date(),
            updatedAt: core.serialization.date(),
            agentId: core.serialization.property("agent_id", AgentId),
        })
        .extend(AgentConfig);

export declare namespace AgentVersion {
    interface Raw extends AgentConfig.Raw {
        id: AgentVersionId.Raw;
        version: number;
        origin: number;
        createdAt: string;
        updatedAt: string;
        agent_id: AgentId.Raw;
    }
}

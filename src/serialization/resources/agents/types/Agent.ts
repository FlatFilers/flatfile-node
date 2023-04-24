/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api";
import * as core from "../../../../core";

export const Agent: core.serialization.ObjectSchema<serializers.Agent.Raw, Flatfile.Agent> = core.serialization
    .object({
        id: core.serialization.lazy(async () => (await import("../../..")).AgentId),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AgentConfig));

export declare namespace Agent {
    interface Raw extends serializers.AgentConfig.Raw {
        id: serializers.AgentId.Raw;
    }
}

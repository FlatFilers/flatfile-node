/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { AgentExportType } from "../../agentExports/types/AgentExportType";

export const AgentExportJobConfig: core.serialization.ObjectSchema<
    serializers.AgentExportJobConfig.Raw,
    Flatfile.AgentExportJobConfig
> = core.serialization.object({
    exportType: AgentExportType,
});

export declare namespace AgentExportJobConfig {
    export interface Raw {
        exportType: AgentExportType.Raw;
    }
}

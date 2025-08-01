/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { EventTopic } from "../../events/types/EventTopic";
import { Compiler } from "./Compiler";
import { AgentTemplateEnum } from "./AgentTemplateEnum";
import { TemplateOptions } from "./TemplateOptions";

export const AgentConfig: core.serialization.ObjectSchema<serializers.AgentConfig.Raw, Flatfile.AgentConfig> =
    core.serialization.object({
        topics: core.serialization.list(EventTopic).optional(),
        compiler: Compiler.optional(),
        source: core.serialization.string().optional(),
        sourceMap: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
        options: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
        template: AgentTemplateEnum.optional(),
        templateOptions: TemplateOptions.optional(),
        isSystem: core.serialization.boolean().optional(),
        namespace: core.serialization.string().optional(),
        packageVersions: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
        commitInfo: core.serialization.record(core.serialization.string(), core.serialization.any()).optional(),
    });

export declare namespace AgentConfig {
    export interface Raw {
        topics?: EventTopic.Raw[] | null;
        compiler?: Compiler.Raw | null;
        source?: string | null;
        sourceMap?: string | null;
        slug?: string | null;
        options?: Record<string, any> | null;
        template?: AgentTemplateEnum.Raw | null;
        templateOptions?: TemplateOptions.Raw | null;
        isSystem?: boolean | null;
        namespace?: string | null;
        packageVersions?: Record<string, string> | null;
        commitInfo?: Record<string, any> | null;
    }
}

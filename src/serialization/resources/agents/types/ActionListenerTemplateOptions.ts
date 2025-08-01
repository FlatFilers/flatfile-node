/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ActionListenerTemplateOptions: core.serialization.ObjectSchema<
    serializers.ActionListenerTemplateOptions.Raw,
    Flatfile.ActionListenerTemplateOptions
> = core.serialization.object({
    namespace: core.serialization.string().optional(),
    jobName: core.serialization.string(),
    actionFunction: core.serialization.string(),
});

export declare namespace ActionListenerTemplateOptions {
    export interface Raw {
        namespace?: string | null;
        jobName: string;
        actionFunction: string;
    }
}

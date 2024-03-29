/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { Action } from "../../commons/types/Action";

export const DocumentConfig: core.serialization.ObjectSchema<serializers.DocumentConfig.Raw, Flatfile.DocumentConfig> =
    core.serialization.object({
        title: core.serialization.string(),
        body: core.serialization.string(),
        treatments: core.serialization.list(core.serialization.string()).optional(),
        actions: core.serialization.list(Action).optional(),
    });

export declare namespace DocumentConfig {
    interface Raw {
        title: string;
        body: string;
        treatments?: string[] | null;
        actions?: Action.Raw[] | null;
    }
}

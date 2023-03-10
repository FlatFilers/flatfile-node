/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const Action: core.serialization.ObjectSchema<serializers.Action.Raw, Flatfile.Action> =
    core.serialization.object({
        slug: core.serialization.string(),
        label: core.serialization.string(),
        type: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
    });

export declare namespace Action {
    interface Raw {
        slug: string;
        label: string;
        type?: string | null;
        description?: string | null;
    }
}

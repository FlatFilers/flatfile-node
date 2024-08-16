/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { AppType } from "./AppType";

export const AppCreate: core.serialization.ObjectSchema<serializers.AppCreate.Raw, Flatfile.AppCreate> =
    core.serialization.object({
        name: core.serialization.string(),
        namespace: core.serialization.string(),
        type: AppType,
        entity: core.serialization.string().optional(),
        entityPlural: core.serialization.string().optional(),
        icon: core.serialization.string().optional(),
        metadata: core.serialization.any().optional(),
        environmentFilters: core.serialization.any().optional(),
        blueprint: core.serialization.any().optional(),
    });

export declare namespace AppCreate {
    interface Raw {
        name: string;
        namespace: string;
        type: AppType.Raw;
        entity?: string | null;
        entityPlural?: string | null;
        icon?: string | null;
        metadata?: any | null;
        environmentFilters?: any | null;
        blueprint?: any | null;
    }
}

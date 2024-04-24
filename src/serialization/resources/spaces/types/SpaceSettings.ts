/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { SpaceSidebarConfig } from "./SpaceSidebarConfig";

export const SpaceSettings: core.serialization.ObjectSchema<serializers.SpaceSettings.Raw, Flatfile.SpaceSettings> =
    core.serialization.object({
        sidebarConfig: SpaceSidebarConfig.optional(),
    });

export declare namespace SpaceSettings {
    interface Raw {
        sidebarConfig?: SpaceSidebarConfig.Raw | null;
    }
}

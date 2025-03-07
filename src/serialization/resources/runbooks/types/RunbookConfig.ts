/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { SheetTransformConfig } from "./SheetTransformConfig";

export const RunbookConfig: core.serialization.Schema<serializers.RunbookConfig.Raw, Flatfile.RunbookConfig> =
    core.serialization.undiscriminatedUnion([SheetTransformConfig]);

export declare namespace RunbookConfig {
    type Raw = SheetTransformConfig.Raw;
}

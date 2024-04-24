/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { SheetId } from "../../commons/types/SheetId";
import { ViewConfig } from "./ViewConfig";

export const ViewCreate: core.serialization.ObjectSchema<serializers.ViewCreate.Raw, Flatfile.ViewCreate> =
    core.serialization.object({
        sheetId: SheetId,
        name: core.serialization.string(),
        config: ViewConfig,
    });

export declare namespace ViewCreate {
    interface Raw {
        sheetId: SheetId.Raw;
        name: string;
        config: ViewConfig.Raw;
    }
}

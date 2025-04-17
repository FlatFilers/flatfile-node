/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SheetConfigUpdate } from "./SheetConfigUpdate";
import { SheetUpdate } from "./SheetUpdate";

export const SheetConfigOrUpdate: core.serialization.ObjectSchema<
    serializers.SheetConfigOrUpdate.Raw,
    Flatfile.SheetConfigOrUpdate
> = core.serialization.object({}).extend(SheetConfigUpdate).extend(SheetUpdate);

export declare namespace SheetConfigOrUpdate {
    export interface Raw extends SheetConfigUpdate.Raw, SheetUpdate.Raw {}
}

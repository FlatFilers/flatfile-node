/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SheetId } from "../../commons/types/SheetId";

export const GuestSheet: core.serialization.ObjectSchema<serializers.GuestSheet.Raw, Flatfile.GuestSheet> =
    core.serialization.object({
        id: SheetId,
    });

export declare namespace GuestSheet {
    export interface Raw {
        id: SheetId.Raw;
    }
}

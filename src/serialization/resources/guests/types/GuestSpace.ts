/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { SpaceId } from "../../commons/types/SpaceId";
import { GuestWorkbook } from "./GuestWorkbook";

export const GuestSpace: core.serialization.ObjectSchema<serializers.GuestSpace.Raw, Flatfile.GuestSpace> =
    core.serialization.object({
        id: SpaceId,
        workbooks: core.serialization.list(GuestWorkbook).optional(),
        lastAccessed: core.serialization.date().optional(),
    });

export declare namespace GuestSpace {
    interface Raw {
        id: SpaceId.Raw;
        workbooks?: GuestWorkbook.Raw[] | null;
        lastAccessed?: string | null;
    }
}

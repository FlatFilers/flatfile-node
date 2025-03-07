/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { FileId } from "../../commons/types/FileId";
import { ModelFileStatusEnum } from "./ModelFileStatusEnum";
import { Mode } from "./Mode";
import { SpaceId } from "../../commons/types/SpaceId";
import { WorkbookId } from "../../commons/types/WorkbookId";
import { SheetId } from "../../commons/types/SheetId";
import { Action } from "../../commons/types/Action";
import { FileOrigin } from "./FileOrigin";

export const File_: core.serialization.ObjectSchema<serializers.File_.Raw, Flatfile.File_> = core.serialization.object({
    id: FileId,
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    ext: core.serialization.string(),
    mimetype: core.serialization.string(),
    encoding: core.serialization.string(),
    status: ModelFileStatusEnum,
    mode: Mode.optional(),
    size: core.serialization.number(),
    bytesReceived: core.serialization.number(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    expiredAt: core.serialization.date().optional(),
    spaceId: SpaceId,
    workbookId: WorkbookId.optional(),
    sheetId: SheetId.optional(),
    actions: core.serialization.list(Action).optional(),
    origin: FileOrigin.optional(),
});

export declare namespace File_ {
    interface Raw {
        id: FileId.Raw;
        name: string;
        description?: string | null;
        ext: string;
        mimetype: string;
        encoding: string;
        status: ModelFileStatusEnum.Raw;
        mode?: Mode.Raw | null;
        size: number;
        bytesReceived: number;
        createdAt: string;
        updatedAt: string;
        expiredAt?: string | null;
        spaceId: SpaceId.Raw;
        workbookId?: WorkbookId.Raw | null;
        sheetId?: SheetId.Raw | null;
        actions?: Action.Raw[] | null;
        origin?: FileOrigin.Raw | null;
    }
}

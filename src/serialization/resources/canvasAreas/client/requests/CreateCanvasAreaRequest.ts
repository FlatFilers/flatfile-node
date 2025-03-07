/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flatfile from "../../../../../api";
import * as core from "../../../../../core";
import { CanvasId } from "../../../commons/types/CanvasId";
import { CanvasAreaType } from "../../types/CanvasAreaType";
import { CanvasAreaPosition } from "../../types/CanvasAreaPosition";
import { CanvasAreaVisibility } from "../../types/CanvasAreaVisibility";
import { CanvasAreaLayout } from "../../types/CanvasAreaLayout";
import { CanvasAreaId } from "../../../commons/types/CanvasAreaId";

export const CreateCanvasAreaRequest: core.serialization.Schema<
    serializers.CreateCanvasAreaRequest.Raw,
    Flatfile.CreateCanvasAreaRequest
> = core.serialization.object({
    canvasId: CanvasId,
    type: CanvasAreaType,
    position: CanvasAreaPosition,
    visibility: CanvasAreaVisibility.optional(),
    layout: CanvasAreaLayout.optional(),
    overlay: core.serialization.any().optional(),
    config: core.serialization.any().optional(),
    metadata: core.serialization.any().optional(),
    parentId: CanvasAreaId.optional(),
});

export declare namespace CreateCanvasAreaRequest {
    interface Raw {
        canvasId: CanvasId.Raw;
        type: CanvasAreaType.Raw;
        position: CanvasAreaPosition.Raw;
        visibility?: CanvasAreaVisibility.Raw | null;
        layout?: CanvasAreaLayout.Raw | null;
        overlay?: any | null;
        config?: any | null;
        metadata?: any | null;
        parentId?: CanvasAreaId.Raw | null;
    }
}

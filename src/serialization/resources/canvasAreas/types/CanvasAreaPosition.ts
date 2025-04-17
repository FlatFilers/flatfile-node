/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const CanvasAreaPosition: core.serialization.Schema<
    serializers.CanvasAreaPosition.Raw,
    Flatfile.CanvasAreaPosition
> = core.serialization.enum_(["top", "left", "right", "middle", "bottom"]);

export declare namespace CanvasAreaPosition {
    export type Raw = "top" | "left" | "right" | "middle" | "bottom";
}

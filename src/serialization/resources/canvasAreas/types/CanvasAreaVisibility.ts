/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CanvasAreaVisibility: core.serialization.Schema<
    serializers.CanvasAreaVisibility.Raw,
    Flatfile.CanvasAreaVisibility
> = core.serialization.enum_(["visible", "hidden", "optional", "skeleton"]);

export declare namespace CanvasAreaVisibility {
    type Raw = "visible" | "hidden" | "optional" | "skeleton";
}

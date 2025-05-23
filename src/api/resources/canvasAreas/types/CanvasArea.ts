/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * A canvas area represents a section within a canvas for organizing content
 */
export interface CanvasArea {
    id: Flatfile.CanvasAreaId;
    /** ID of the canvas this area belongs to */
    canvasId: Flatfile.CanvasId;
    /** ID of the parent canvas area, if this is a nested area */
    parentId?: Flatfile.CanvasAreaId;
    /** Additional configuration data for the canvas area */
    config?: any;
    /** Metadata associated with the canvas area */
    metadata?: any;
    /** Layout configuration for the canvas area */
    layout: Flatfile.CanvasAreaLayout;
    /** Overlay configuration for the canvas area */
    overlay?: any;
    /** Type of the canvas area */
    type: Flatfile.CanvasAreaType;
    /** Position of the canvas area within the canvas */
    position: Flatfile.CanvasAreaPosition;
    /** Visibility of the canvas area */
    visibility: Flatfile.CanvasAreaVisibility;
    /** When the canvas area was created */
    createdAt: Date;
    /** When the canvas area was last updated */
    updatedAt: Date;
    /** When the canvas area was deleted, if applicable */
    deletedAt?: Date;
}

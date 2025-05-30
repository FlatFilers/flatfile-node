/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ListCanvasAreasRequest {
    /**
     * ID of the canvas to filter areas by
     */
    canvasId?: Flatfile.CanvasId;
    /**
     * ID of the parent canvas area to filter by
     */
    parentId?: Flatfile.CanvasAreaId;
    /**
     * ID of the space to filter areas by
     */
    spaceId?: Flatfile.SpaceId;
    /**
     * ID of the environment to filter areas by
     */
    environmentId?: Flatfile.EnvironmentId;
    /**
     * Number of areas to return in a page (default 20)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of areas to return
     */
    pageNumber?: number;
}

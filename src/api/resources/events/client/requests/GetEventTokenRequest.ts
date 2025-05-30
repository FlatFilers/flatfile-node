/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GetEventTokenRequest {
    /**
     * The resource ID of the event stream (space or environment id)
     */
    scope?: string;
    /**
     * The space ID of the event stream
     */
    spaceId?: Flatfile.SpaceId;
}

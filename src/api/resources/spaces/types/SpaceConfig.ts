/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Properties used to create a new Space
 */
export interface SpaceConfig extends Flatfile.spaces.InternalSpaceConfigBase {
    /** The name of the space */
    name?: string;
    /** The display order */
    displayOrder?: number;
    guestAuthentication?: Flatfile.GuestAuthenticationEnum[];
}

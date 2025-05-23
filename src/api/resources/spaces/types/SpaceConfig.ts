/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Properties used to create a new Space
 *
 * @example
 *     {
 *         name: "My First Workbook",
 *         displayOrder: 1,
 *         environmentId: "us_env_YOUR_ID",
 *         primaryWorkbookId: "us_wb_YOUR_ID"
 *     }
 *
 * @example
 *     {
 *         name: "My Updated Worbook"
 *     }
 */
export interface SpaceConfig extends Flatfile.InternalSpaceConfigBase {
    /** The name of the space */
    name?: string;
    /** The display order */
    displayOrder?: number;
    guestAuthentication?: Flatfile.GuestAuthenticationEnum[];
}

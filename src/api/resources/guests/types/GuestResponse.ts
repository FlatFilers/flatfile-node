/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: {
 *             id: "us_g_YOUR_ID",
 *             environmentId: "us_env_YOUR_ID",
 *             email: "email@example.com",
 *             name: "Your Name",
 *             spaces: [{
 *                     id: "us_sp_YOUR_ID",
 *                     workbooks: [{
 *                             id: "us_wb_YOUR_ID"
 *                         }],
 *                     sheets: [{
 *                             id: "us_sh_YOUR_ID"
 *                         }],
 *                     lastAccessed: "2023-10-30T16:59:45.735Z"
 *                 }],
 *             createdAt: "2023-10-30T16:59:45.735Z",
 *             updatedAt: "2023-10-30T16:59:45.735Z"
 *         }
 *     }
 */
export interface GuestResponse {
    data: Flatfile.Guest;
}

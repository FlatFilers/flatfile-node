/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_rb_YOUR_ID",
 *                 accountId: "us_acc_YOUR_ID",
 *                 appId: "us_app_YOUR_ID",
 *                 environmentId: "us_env_YOUR_ID",
 *                 spaceId: "us_sp_YOUR_ID",
 *                 name: "Runbook Name",
 *                 config: {
 *                     sourceSheetIds: ["us_sh_YOUR_ID"],
 *                     destinationSheetIds: ["us_sh_YOUR_ID"]
 *                 },
 *                 status: Flatfile.RunbookStatus.Created,
 *                 type: Flatfile.RunbookType.Preprocessing,
 *                 createdBy: "us_usr_YOUR_ID",
 *                 updatedAt: "2024-12-05T18:00:00Z",
 *                 createdAt: "2024-12-05T18:00:00Z"
 *             }]
 *     }
 */
export interface RunbooksResponse {
    data: Flatfile.Runbook[];
}

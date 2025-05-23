/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: {
 *             id: "us_drp_YOUR_ID",
 *             environmentId: "us_env_YOUR_ID",
 *             createdAt: "2023-11-15T19:31:33.015Z",
 *             updatedAt: "2023-11-15T19:31:33.015Z",
 *             type: Flatfile.DataRetentionPolicyEnum.LastActivity,
 *             period: 5
 *         }
 *     }
 */
export interface DataRetentionPolicyResponse {
    data: Flatfile.DataRetentionPolicy;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * A data retention policy belonging to an environment
 *
 * @example
 *     {
 *         id: "us_drp_YOUR_ID",
 *         environmentId: "us_env_YOUR_ID",
 *         createdAt: new Date("2023-11-15T19:31:33.015Z"),
 *         updatedAt: new Date("2023-11-15T19:31:33.015Z"),
 *         type: Flatfile.DataRetentionPolicyEnum.LastActivity,
 *         period: 5
 *     }
 */
export interface DataRetentionPolicy extends Flatfile.DataRetentionPolicyConfig {
    id: Flatfile.DataRetentionPolicyId;
    environmentId: Flatfile.EnvironmentId;
    /** Date the policy was created */
    createdAt: Date;
    /** Date the policy was last updated */
    updatedAt: Date;
}

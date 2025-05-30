/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../../index";

/**
 * @example
 *     {
 *         environmentId: "us_env_YOUR_ID"
 *     }
 */
export interface ListDataRetentionPoliciesRequest {
    /**
     * The associated Environment ID of the policy.
     */
    environmentId?: Flatfile.EnvironmentId;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../../index";

/**
 * @example
 *     {
 *         environmentId: "us_env_YOUR_ID",
 *         type: "PUBLISHABLE"
 *     }
 */
export interface CreateNewApiKeyRequest {
    environmentId: Flatfile.EnvironmentId;
    /**
     * API key type (SECRET or PUBLISHABLE)
     */
    type: Flatfile.ApiKeyType;
}

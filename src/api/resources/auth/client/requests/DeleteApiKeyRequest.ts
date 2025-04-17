/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../../index";

/**
 * @example
 *     {
 *         environmentId: "us_env_YOUR_ID",
 *         key: "us_key_YOUR_ID"
 *     }
 */
export interface DeleteApiKeyRequest {
    environmentId: Flatfile.EnvironmentId;
    key: Flatfile.ApiKeyId;
}

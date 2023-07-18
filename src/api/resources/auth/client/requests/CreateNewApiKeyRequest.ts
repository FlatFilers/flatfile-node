/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface CreateNewApiKeyRequest {
    /**
     * ID of environment to search
     */
    environmentId: string;
    /**
     * API key type (SECRET or PUBLISHABLE)
     */
    type: Flatfile.ApiKeyType;
}
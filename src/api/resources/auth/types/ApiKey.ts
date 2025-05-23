/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * API Key used for authenticating against our APIs
 *
 * @example
 *     {
 *         id: "us_key_YOUR_ID",
 *         rawKey: "pk_YOUR_RAW_API_KEY",
 *         type: Flatfile.ApiKeyType.Publishable,
 *         environmentId: "us_env_YOUR_ID",
 *         accountId: "us_acc_YOUR_ID",
 *         operations: [{
 *                 path: "/v1/spaces",
 *                 method: "POST"
 *             }],
 *         createdAt: "2017-07-21T17:32:28Z"
 *     }
 */
export interface ApiKey {
    id: Flatfile.ApiKeyId;
    rawKey?: Flatfile.RawKey;
    type: Flatfile.ApiKeyType;
    environmentId?: Flatfile.EnvironmentId;
    accountId?: Flatfile.AccountId;
    operations: Flatfile.ApiKeyOperation[];
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    secret?: string;
}

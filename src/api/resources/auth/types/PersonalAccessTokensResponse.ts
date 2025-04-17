/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_pat_YOUR_ID",
 *                 name: "My API Token",
 *                 createdAt: "2023-07-21T17:32:28Z",
 *                 lastUsedAt: "2023-07-22T10:15:42Z"
 *             }]
 *     }
 */
export interface PersonalAccessTokensResponse {
    data: Flatfile.PersonalAccessToken[];
}

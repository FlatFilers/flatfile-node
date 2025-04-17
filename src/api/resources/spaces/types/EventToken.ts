/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Properties used to allow users to connect to the event bus
 *
 * @example
 *     {
 *         accountId: "us_acc_YOUR_ID",
 *         subscribeKey: "sub-c-TOKEN",
 *         ttl: 15,
 *         token: "LONG-TOKEN"
 *     }
 */
export interface EventToken {
    /** The ID of the Account. */
    accountId?: Flatfile.AccountId;
    /** The id of the event bus to subscribe to */
    subscribeKey?: string;
    /** Time to live in minutes */
    ttl?: number;
    /** This should be your API key. */
    token?: string;
}

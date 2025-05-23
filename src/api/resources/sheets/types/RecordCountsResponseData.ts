/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         counts: {
 *             valid: 1000,
 *             error: 0,
 *             total: 1000
 *         },
 *         success: true
 *     }
 */
export interface RecordCountsResponseData {
    counts: Flatfile.RecordCounts;
    success: boolean;
}

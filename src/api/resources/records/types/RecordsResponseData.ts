/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         records: [{
 *                 id: "us_rc_YOUR_ID",
 *                 values: {
 *                     "firstName": {
 *                         value: "John",
 *                         messages: [],
 *                         valid: true,
 *                         updatedAt: "2023-11-20T16:59:40.286Z"
 *                     },
 *                     "lastName": {
 *                         value: "Smith",
 *                         messages: [],
 *                         valid: true,
 *                         updatedAt: "2023-11-20T16:59:40.286Z"
 *                     },
 *                     "email": {
 *                         value: "john.smith@example.com",
 *                         messages: [],
 *                         valid: true,
 *                         updatedAt: "2023-11-20T16:59:40.286Z"
 *                     }
 *                 },
 *                 valid: true,
 *                 metadata: {},
 *                 config: {}
 *             }],
 *         counts: {
 *             valid: 1000,
 *             error: 0,
 *             total: 1000
 *         },
 *         versionId: "us_vr_YOUR_ID",
 *         commitId: "us_vr_YOUR_ID",
 *         success: true
 *     }
 */
export interface RecordsResponseData extends Flatfile.SuccessData {
    records?: Flatfile.RecordsWithLinks;
    counts?: Flatfile.RecordCounts;
    /** Deprecated, use `commitId` instead. */
    versionId?: Flatfile.VersionId;
    commitId?: Flatfile.CommitId;
}

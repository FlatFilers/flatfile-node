/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * List of DiffRecord objects
 *
 * @example
 *     [{
 *             id: "us_rc_YOUR_ID",
 *             values: {
 *                 "firstName": {
 *                     snapshotValue: "John",
 *                     value: "Johns"
 *                 },
 *                 "lastName": {
 *                     snapshotValue: "Doe",
 *                     value: "Does"
 *                 },
 *                 "email": {
 *                     snapshotValue: "john.doe@example.com",
 *                     value: "john.doe@example.com"
 *                 }
 *             }
 *         }]
 */
export type DiffRecords = Flatfile.DiffRecord[];

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         fieldMapping: [{
 *                 sourceField: {
 *                     type: "string",
 *                     key: "firstName"
 *                 },
 *                 destinationField: {
 *                     type: "string",
 *                     key: "firstName",
 *                     label: "First Name"
 *                 }
 *             }, {
 *                 sourceField: {
 *                     type: "string",
 *                     key: "lastName"
 *                 },
 *                 destinationField: {
 *                     type: "string",
 *                     key: "lastName",
 *                     label: "Last Name"
 *                 }
 *             }],
 *         unmappedSourceFields: [{
 *                 sourceField: {
 *                     type: "string",
 *                     key: "email"
 *                 }
 *             }],
 *         unmappedDestinationFields: [{
 *                 destinationField: {
 *                     type: "string",
 *                     key: "email",
 *                     label: "Email"
 *                 }
 *             }],
 *         fileId: "us_fl_YOUR_ID",
 *         jobId: "us_jb_YOUR_ID"
 *     }
 */
export interface JobExecutionPlanRequest extends Flatfile.JobExecutionPlan {
    fileId: Flatfile.FileId;
    jobId: Flatfile.JobId;
}

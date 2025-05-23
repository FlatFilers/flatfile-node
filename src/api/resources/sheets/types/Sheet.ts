/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * A place to store tabular data
 *
 * @example
 *     {
 *         id: "us_sh_YOUR_ID",
 *         workbookId: "us_wb_YOUR_ID",
 *         name: "Contacts",
 *         slug: "contacts",
 *         config: {
 *             name: "Contacts",
 *             slug: "contacts",
 *             fields: [{
 *                     type: "string",
 *                     key: "firstName",
 *                     label: "First Name"
 *                 }, {
 *                     type: "string",
 *                     key: "lastName",
 *                     label: "Last Name"
 *                 }, {
 *                     type: "string",
 *                     key: "email",
 *                     label: "Email"
 *                 }],
 *             mappingConfidenceThreshold: 0.5
 *         },
 *         metadata: {
 *             "rowHeaders": [
 *                 4
 *             ]
 *         },
 *         updatedAt: "2021-08-31T18:00:00Z",
 *         createdAt: "2021-08-31T18:00:00Z"
 *     }
 *
 * @example
 *     {
 *         id: "us_sh_YOUR_ID",
 *         workbookId: "us_wb_YOUR_ID",
 *         name: "New Sheet Name",
 *         slug: "contacts",
 *         config: {
 *             name: "Contacts",
 *             slug: "contacts",
 *             fields: [{
 *                     type: "string",
 *                     key: "firstName",
 *                     label: "First Name"
 *                 }, {
 *                     type: "string",
 *                     key: "lastName",
 *                     label: "Last Name"
 *                 }, {
 *                     type: "string",
 *                     key: "email",
 *                     label: "Email"
 *                 }],
 *             mappingConfidenceThreshold: 0.5
 *         },
 *         metadata: {
 *             "rowHeaders": [
 *                 6
 *             ]
 *         },
 *         updatedAt: "2021-08-31T18:00:00Z",
 *         createdAt: "2021-08-31T18:00:00Z"
 *     }
 */
export interface Sheet {
    /** The ID of the Sheet. */
    id: Flatfile.SheetId;
    /** The ID of the Workbook. */
    workbookId: Flatfile.WorkbookId;
    /** The name of the Sheet. */
    name: string;
    /** The slug of the Sheet. */
    slug: string;
    /** Describes shape of data as well as behavior */
    config: Flatfile.SheetConfig;
    /** Useful for any contextual metadata regarding the sheet. Store any valid json */
    metadata?: any;
    /** The scoped namespace of the Sheet. */
    namespace?: string;
    /** The actor who locked the Sheet. */
    lockedBy?: string;
    /** Date the sheet was last updated */
    updatedAt: Date;
    /** Date the sheet was created */
    createdAt: Date;
    /** The time the Sheet was locked. */
    lockedAt?: Date;
    /** The precomputed counts of records in the Sheet (may not exist). */
    recordCounts?: Flatfile.RecordCounts;
    /** The sheet id of the template that was used to create this sheet */
    createdFrom?: Flatfile.SheetId;
    /** The last time the sheet template configuration was propagated to this sheet */
    lastPropagatedAt?: Date;
    /** An array of treatments that define the behavior of the sheet. */
    treatments?: Flatfile.SheetTreatments[];
}

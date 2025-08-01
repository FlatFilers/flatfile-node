/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Properties used to create a new Workbook
 *
 * @example
 *     {
 *         name: "My First Workbook",
 *         sheets: [{
 *                 name: "Contacts",
 *                 slug: "contacts",
 *                 fields: [{
 *                         type: "string",
 *                         key: "firstName",
 *                         label: "First Name"
 *                     }, {
 *                         type: "string",
 *                         key: "lastName",
 *                         label: "Last Name"
 *                     }, {
 *                         type: "string",
 *                         key: "email",
 *                         label: "Email"
 *                     }],
 *                 mappingConfidenceThreshold: 0.5
 *             }],
 *         labels: ["simple-demo"],
 *         actions: [{
 *                 operation: "submitAction",
 *                 mode: Flatfile.ActionMode.Foreground,
 *                 label: "Submit",
 *                 description: "Submit data to webhook.site",
 *                 primary: true
 *             }],
 *         settings: {
 *             trackChanges: true,
 *             autoRunAnalysis: true
 *         }
 *     }
 */
export interface CreateWorkbookConfig {
    /** The name of the Workbook. */
    name: string;
    /** An optional list of labels for the Workbook. */
    labels?: string[];
    /** Space to associate with the Workbook. */
    spaceId?: Flatfile.SpaceId;
    /** Environment to associate with the Workbook */
    environmentId?: Flatfile.EnvironmentId;
    /** Optional namespace to apply to the Workbook. */
    namespace?: string;
    /** Sheets to create on the Workbook. */
    sheets?: Flatfile.SheetConfig[];
    /** Actions to create on the Workbook. */
    actions?: Flatfile.Action[];
    /** The Workbook settings. */
    settings?: Flatfile.WorkbookConfigSettings;
    /** Metadata for the workbook */
    metadata?: any;
    /** Treatments for the workbook */
    treatments?: Flatfile.WorkbookTreatments[];
    /** Storage strategy for the workbook. Defaults to QUICKSTORE. */
    storageStrategy?: Flatfile.StorageStrategy;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Describes shape of data as well as behavior
 *
 * @example
 *     {
 *         name: "Contacts",
 *         slug: "contacts",
 *         fields: [{
 *                 type: "string",
 *                 key: "firstName",
 *                 label: "First Name"
 *             }, {
 *                 type: "string",
 *                 key: "lastName",
 *                 label: "Last Name"
 *             }, {
 *                 type: "string",
 *                 key: "email",
 *                 label: "Email"
 *             }],
 *         mappingConfidenceThreshold: 0.5
 *     }
 */
export interface SheetConfig {
    /** The name of your Sheet as it will appear to your end users. */
    name: string;
    /** A sentence or two describing the purpose of your Sheet. */
    description?: string;
    /** A unique identifier for your Sheet. */
    slug?: string;
    /** A boolean specifying whether or not this sheet is read only. Read only sheets are not editable by end users. */
    readonly?: boolean;
    /** Allow end users to add fields during mapping. */
    allowAdditionalFields?: boolean;
    /** The minimum confidence required to automatically map a field */
    mappingConfidenceThreshold?: number;
    /** Control Sheet-level access for all users. */
    access?: Flatfile.SheetAccess[];
    /** Where you define your Sheet's data schema. */
    fields: Flatfile.Property[];
    /** An array of actions that end users can perform on this Sheet. */
    actions?: Flatfile.Action[];
    /** Useful for any contextual metadata regarding the schema. Store any valid json */
    metadata?: any;
    /** An array of constraints that end users can perform on this Sheet. */
    constraints?: Flatfile.SheetConstraint[];
}

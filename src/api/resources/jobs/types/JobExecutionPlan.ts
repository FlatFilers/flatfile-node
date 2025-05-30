/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * The execution plan for a job, for example, for a map job, the execution plan is the mapping of the source sheet to the destination sheet.
 *
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
 *                 },
 *                 preview: ["John", "Suzy", "Joe"],
 *                 metadata: {
 *                     certainty: Flatfile.Certainty.Absolute,
 *                     confidence: 1,
 *                     source: "exact"
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
 *                 },
 *                 preview: ["Smith", "Que", "Montana"],
 *                 metadata: {
 *                     certainty: Flatfile.Certainty.Absolute,
 *                     confidence: 1,
 *                     source: "exact"
 *                 }
 *             }],
 *         unmappedSourceFields: [],
 *         unmappedDestinationFields: []
 *     }
 */
export interface JobExecutionPlan {
    fieldMapping: Flatfile.Edge[];
    unmappedSourceFields: Flatfile.SourceField[];
    unmappedDestinationFields: Flatfile.DestinationField[];
    programId?: string;
}

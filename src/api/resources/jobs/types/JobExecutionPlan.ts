/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

/**
 * The execution plan for a job, for example, for a map job, the execution plan is the mapping of the source sheet to the destination sheet.
 */
export interface JobExecutionPlan {
    fieldMapping?: Flatfile.Edge[];
    unmappedSourceFields?: Flatfile.SourceField[];
    unmappedDestinationFields?: Flatfile.DestinationField[];
    /** The number of rows to skip before reading data from the document */
    headerRowCount?: number;
}

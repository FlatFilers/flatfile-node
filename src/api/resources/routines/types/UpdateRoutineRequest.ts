/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         name: "Split Address to Street, City, State, Zip",
 *         config: {
 *             "sourceSheetId": "us_sh_YOUR_ID",
 *             "destinationSheetId": "us_sh_YOUR_ID",
 *             "programId": "us_mp_YOUR_ID"
 *         },
 *         ordinal: 1,
 *         type: Flatfile.RoutineType.Job
 *     }
 */
export interface UpdateRoutineRequest {
    /** The name of the Routine. */
    name: string;
    /** Configuration for the Routine. Related to the type of Routine. */
    config?: any;
    /** The order of the Routine in the Runbook. */
    ordinal: number;
    /** The type of Routine. */
    type: Flatfile.RoutineType;
}

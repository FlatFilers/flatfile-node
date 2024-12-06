/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * A single unit of work that will be executed
 *
 * @example
 *     {
 *         config: {},
 *         status: Flatfile.JobStatus.Complete,
 *         progress: 100
 *     }
 */
export interface JobUpdate {
    config?: Flatfile.JobUpdateConfig;
    /** the status of the job */
    status?: Flatfile.JobStatus;
    /** the progress of the job. Whole number between 0 and 100 */
    progress?: number;
    /** the time that the job's outcome has been acknowledged by a user */
    outcomeAcknowledgedAt?: Date;
    /** Current status of job in text */
    info?: string;
    /** Additional metadata for the job */
    metadata?: Record<string, any>;
}

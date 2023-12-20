/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface ListProgramsRequest {
    /**
     * Number of programs to return in a page (default 10)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
    /**
     * Filter by creator
     */
    createdBy?: Flatfile.UserId;
    /**
     * Filter by creation time
     */
    createdAfter?: Date;
    /**
     * Filter by creation time
     */
    createdBefore?: Date;
    /**
     * The ID of the environment
     */
    environmentId?: Flatfile.EnvironmentId;
    /**
     * Filter by source keys
     */
    sourceKeys?: string;
    /**
     * Filter by destination keys
     */
    destinationKeys?: string;
}

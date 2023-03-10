/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FindRecordsRequest {
    /**
     * Number of records to return in a page (default 1000 if pageNumber included)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
}

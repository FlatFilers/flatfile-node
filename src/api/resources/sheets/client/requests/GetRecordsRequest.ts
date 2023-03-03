/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

export interface GetRecordsRequest {
    versionId?: string;
    sortField?: Flatfile.SortField;
    sortDirection?: Flatfile.SortDirection;
    filter?: Flatfile.Filter;
    /**
     * Name of field by which to filter records
     */
    filterField?: Flatfile.FilterField;
    searchValue?: Flatfile.SearchValue;
    searchField?: Flatfile.SearchField;
    /**
     * Number of records to return in a page (default 1000 if pageNumber included)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of records to return
     */
    pageNumber?: number;
    /**
     * Include counts for the total records, valid records and records with errors
     */
    includeCounts?: boolean;
}

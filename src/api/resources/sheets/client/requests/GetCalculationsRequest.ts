/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GetCalculationsRequest {
    /**
     * Returns records that were changed in that version and only those records.
     */
    versionId?: string;
    /**
     * Deprecated, use `sinceCommitId` instead.
     */
    sinceVersionId?: Flatfile.VersionId;
    /**
     * Returns records that were changed in that version in addition to any records from versions after that version.
     */
    commitId?: Flatfile.CommitId;
    /**
     * Listing a commit ID here will return all records since the specified commit.
     */
    sinceCommitId?: Flatfile.CommitId;
    /**
     * Options to filter records
     */
    filter?: Flatfile.Filter;
    /**
     * The field to filter the data on.
     */
    filterField?: Flatfile.FilterField;
    /**
     * The value to search for data on.
     */
    searchValue?: Flatfile.SearchValue;
    /**
     * The field to search for data on.
     */
    searchField?: Flatfile.SearchField;
    /**
     * If true, the counts for each field will also be returned
     */
    byField?: boolean;
    /**
     * An FFQL query used to filter the result set to be counted
     */
    q?: string;
}

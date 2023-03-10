/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * A list of records with optional record counts
 */
export interface RecordsResponseData extends Flatfile.Success {
    records?: Flatfile.RecordsWithLinks;
    counts?: Flatfile.RecordCounts;
    versionId?: Flatfile.VersionId;
}

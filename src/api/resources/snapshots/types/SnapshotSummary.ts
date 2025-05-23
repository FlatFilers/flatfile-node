/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export interface SnapshotSummary {
    createdSince: Flatfile.SummarySection;
    updatedSince: Flatfile.SummarySection;
    deletedSince: Flatfile.SummarySection;
    /** The schema diff between the snapshot and the current sheet schema. */
    schemaDiff: Flatfile.SchemaDiffRecord;
    /** The sheet configuration at the time of the snapshot. */
    config: Flatfile.SheetConfig;
}

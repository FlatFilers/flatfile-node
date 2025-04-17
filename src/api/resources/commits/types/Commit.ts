/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * A commit version
 *
 * @example
 *     {
 *         id: "us_vr_YOUR_ID",
 *         sheetId: "us_sh_YOUR_ID",
 *         createdBy: "us_usr_YOUR_ID",
 *         createdAt: "2019-08-24T14:15:22Z"
 *     }
 */
export interface Commit {
    id: Flatfile.CommitId;
    sheetId: Flatfile.SheetId;
    /** The actor (user or system) who created the commit */
    createdBy: string;
    /** The actor (user or system) who completed the commit */
    completedBy?: string;
    /** The time the commit was created */
    createdAt: Date;
    /** The time the commit was acknowledged */
    completedAt?: Date;
}

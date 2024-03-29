/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Subject parameters for this job type
 *
 * @example
 *     {
 *         type: "resource",
 *         id: "us_wb_YOUR_ID"
 *     }
 */
export type JobSubject = Flatfile.JobSubject.Resource | Flatfile.JobSubject.Collection;

export declare namespace JobSubject {
    interface Resource extends Flatfile.ResourceJobSubject {
        type: "resource";
    }

    interface Collection extends Flatfile.CollectionJobSubject {
        type: "collection";
    }
}

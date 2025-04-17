/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * The attributes of the event
 */
export interface EventAttributes {
    /** Date the related entity was last updated */
    targetUpdatedAt?: Date;
    /** The progress of the event within a collection of iterable events */
    progress?: Flatfile.Progress;
}

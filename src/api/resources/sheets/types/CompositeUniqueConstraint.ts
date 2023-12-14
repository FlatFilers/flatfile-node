/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface CompositeUniqueConstraint {
    /** The name of the constraint */
    name: string;
    /** The fields that must be unique together */
    fields: string[];
    strategy: Flatfile.CompositeUniqueConstraintStrategy;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

export interface DestinationField {
    /** Only available if one or more of the destination fields is of type enum. Provides category mapping. */
    enumDetails?: Flatfile.EnumDetails;
    destinationField: Flatfile.Property;
    preview?: string[];
}

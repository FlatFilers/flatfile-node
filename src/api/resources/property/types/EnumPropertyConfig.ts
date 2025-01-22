/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface EnumPropertyConfig {
    /** Permit the user to create new options for this specific field. */
    allowCustom?: boolean;
    options: Flatfile.EnumPropertyOption[];
    /** Sort the options by the value of this property. Defaults to `label`. */
    sortBy?: Flatfile.EnumPropertySortBy;
}

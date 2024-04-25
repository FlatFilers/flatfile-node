/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Defines an array of values selected from an enumerated list of options. Matching tooling attempts to resolve incoming data assigment to a valid option. The maximum number of items that can be in this list is `100`.
 */
export interface EnumListProperty extends Flatfile.BaseProperty {
    config: Flatfile.EnumPropertyConfig;
}

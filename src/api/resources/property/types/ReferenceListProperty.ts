/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Defines an array of values referenced from another sheet. Links should be established automatically by the matching engine or similar upon an evaluation of unique or similar columns between datasets.
 */
export interface ReferenceListProperty extends Flatfile.BaseProperty, Flatfile.ArrayableProperty {
    config: Flatfile.ReferenceListPropertyConfig;
}

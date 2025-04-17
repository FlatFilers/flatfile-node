/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Defines a reference to another sheet. Links should be established automatically by the matching engine or similar upon an evaluation of unique or similar columns between datasets.
 */
export interface ReferenceProperty extends Flatfile.BaseProperty, Flatfile.ArrayableProperty {
    config: Flatfile.ReferencePropertyConfig;
}

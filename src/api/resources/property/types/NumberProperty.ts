/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Defines a property that should be stored and read as either an integer or floating point number. Database engines should look at the configuration to determine ideal storage format.
 */
export interface NumberProperty extends Flatfile.BaseProperty, Flatfile.ArrayableProperty {
    config?: Flatfile.NumberConfig;
}

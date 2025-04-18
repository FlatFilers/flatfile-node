/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export interface BaseProperty {
    key: string;
    /** User friendly field name */
    label?: string;
    /** A short description of the field. Markdown syntax is supported. */
    description?: string;
    /** A list of constraints that should be applied to this field. This is limited to a maximum of 10 constraints and all external and stored constraints must have unique validator values. */
    constraints?: Flatfile.Constraint[];
    readonly?: boolean;
    appearance?: Flatfile.FieldAppearance;
    /** An array of actions that end users can perform on this Column. */
    actions?: Flatfile.Action[];
    /** Useful for any contextual metadata regarding the schema. Store any valid json here. */
    metadata?: any;
    /** A unique presentation for a field in the UI. */
    treatments?: string[];
    alternativeNames?: string[];
}

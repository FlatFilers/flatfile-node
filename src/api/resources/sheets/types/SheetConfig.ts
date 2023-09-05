/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Describes shape of data as well as behavior
 */
export interface SheetConfig {
    name: string;
    description?: string;
    slug?: string;
    readonly?: boolean;
    allowAdditionalFields?: boolean;
    access?: Flatfile.SheetAccess[];
    fields: Flatfile.Property[];
    actions?: Flatfile.Action[];
}

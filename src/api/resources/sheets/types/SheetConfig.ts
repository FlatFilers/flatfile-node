/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

/**
 * Describes shape of data as well as behavior
 */
export interface SheetConfig {
    name: string;
    description?: string;
    slug?: string;
    fields: Flatfile.Property[];
    actions?: Flatfile.Action[];
}

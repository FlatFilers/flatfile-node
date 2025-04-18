/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         name: "My View",
 *         config: {
 *             filter: Flatfile.Filter.Error,
 *             filterField: "email",
 *             q: "firstname like %John%",
 *             sortField: "email",
 *             sortDirection: Flatfile.SortDirection.Asc
 *         }
 *     }
 */
export interface ViewUpdate {
    name?: string;
    config: Flatfile.ViewConfig;
}

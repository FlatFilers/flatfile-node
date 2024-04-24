/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_vi_YOUR_ID",
 *                 sheetId: "us_sh_YOUR_ID",
 *                 name: "My View",
 *                 config: {
 *                     filter: Flatfile.Filter.Error,
 *                     filterField: "email",
 *                     q: "firstname like %John%",
 *                     sortField: "email",
 *                     sortDirection: Flatfile.SortDirection.Asc
 *                 }
 *             }],
 *         pagination: {
 *             currentPage: 3,
 *             pageCount: 50,
 *             totalCount: 100
 *         }
 *     }
 */
export interface ListViewsResponse {
    pagination?: Flatfile.Pagination;
    data: Flatfile.View[];
}

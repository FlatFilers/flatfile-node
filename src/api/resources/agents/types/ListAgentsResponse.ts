/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_ag_YOUR_ID",
 *                 topics: [Flatfile.EventTopic.WorkbookUpdated],
 *                 compiler: Flatfile.Compiler.Js,
 *                 source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }",
 *                 slug: "default",
 *                 createdAt: "2023-10-30T16:59:45.735Z",
 *                 updatedAt: "2023-10-30T16:59:45.735Z",
 *                 accountId: "us_acc_YOUR_ID",
 *                 environmentId: "us_env_YOUR_ID",
 *                 options: {
 *                     "namespace": "space:blue"
 *                 }
 *             }],
 *         pagination: {
 *             currentPage: 3,
 *             pageCount: 50,
 *             totalCount: 100
 *         }
 *     }
 */
export interface ListAgentsResponse {
    data?: Flatfile.Agent[];
    pagination?: Flatfile.Pagination;
}

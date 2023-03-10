/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * @example
 *     {
 *         pagination: {
 *             currentPage: 3,
 *             pageCount: 50,
 *             totalCount: 100
 *         },
 *         data: [{
 *                 eventId: "us_evt_9cuesESa7W9cuesE",
 *                 success: true,
 *                 createdAt: "2022-09-18T00:19:57.007Z",
 *                 log: "SUCCESS"
 *             }]
 *     }
 */
export interface GetAgentLogsResponse {
    pagination?: Flatfile.Pagination;
    data: Flatfile.AgentLog[];
}

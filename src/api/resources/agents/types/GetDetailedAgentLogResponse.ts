/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: {
 *             eventId: "us_evt_YOUR_ID",
 *             success: true,
 *             createdAt: "2022-09-18T00:19:57.007Z",
 *             completedAt: "2022-09-18T00:20:04.007Z",
 *             duration: 500,
 *             topic: "space:created",
 *             context: {},
 *             log: "SUCCESS"
 *         }
 *     }
 */
export interface GetDetailedAgentLogResponse {
    data: Flatfile.DetailedAgentLog;
}

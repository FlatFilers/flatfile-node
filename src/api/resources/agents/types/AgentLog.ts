/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * A log of an agent execution
 *
 * @example
 *     {
 *         eventId: "us_evt_YOUR_ID",
 *         agentId: "us_ag_YOUR_ID",
 *         success: true,
 *         createdAt: "2022-09-18T00:19:57.007Z",
 *         completedAt: "2022-09-18T00:20:04.007Z",
 *         log: "SUCCESS"
 *     }
 */
export interface AgentLog {
    agentId: Flatfile.AgentId;
    eventId: Flatfile.EventId;
    /** Whether the agent execution was successful */
    success: boolean;
    createdAt: string;
    completedAt: string;
    /** The log of the agent execution */
    log?: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         id: "us_ag_YOUR_ID",
 *         topics: [Flatfile.EventTopic.WorkbookUpdated],
 *         compiler: Flatfile.Compiler.Js,
 *         source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }",
 *         slug: "default",
 *         createdAt: "2023-10-30T16:59:45.735Z",
 *         updatedAt: "2023-10-30T16:59:45.735Z",
 *         accountId: "us_acc_YOUR_ID",
 *         environmentId: "us_env_YOUR_ID",
 *         options: {
 *             "namespace": "space:blue"
 *         }
 *     }
 */
export interface Agent extends Flatfile.AgentConfig {
    id: Flatfile.AgentId;
    createdAt: Date;
    updatedAt: Date;
    accountId: Flatfile.AccountId;
    environmentId: Flatfile.EnvironmentId;
    /** The agent id of the template that was used to create this agent */
    createdFrom?: Flatfile.AgentId;
    /** The last time the agent template configuration was propagated to this agent */
    lastPropagatedAt?: Date;
}

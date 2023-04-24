/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api";

/**
 * @example
 *     {
 *         id: "123",
 *         topics: [Flatfile.EventTopic.UploadStarted],
 *         compiler: Flatfile.Compiler.Js,
 *         source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }"
 *     }
 */
export interface Agent extends Flatfile.AgentConfig {
    id: Flatfile.AgentId;
}

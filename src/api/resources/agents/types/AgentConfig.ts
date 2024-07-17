/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Properties used to create a new agent
 *
 * @example
 *     {
 *         topics: [Flatfile.EventTopic.WorkbookUpdated],
 *         compiler: Flatfile.Compiler.Js,
 *         source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }"
 *     }
 */
export interface AgentConfig {
    /** The topics the agent should listen for */
    topics?: Flatfile.EventTopic[];
    /** The compiler of the agent */
    compiler?: Flatfile.Compiler;
    /** The source of the agent */
    source?: string;
    /** The source map of the agent */
    sourceMap?: string;
    /** The slug of the agent */
    slug?: string;
}

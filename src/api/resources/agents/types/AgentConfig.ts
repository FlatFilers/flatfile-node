/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Properties used to create a new agent
 *
 * @example
 *     {
 *         topics: [Flatfile.EventTopic.WorkbookUpdated],
 *         compiler: Flatfile.Compiler.Js,
 *         source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }",
 *         namespace: "space:blue"
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
    /** This field is deprecated and will be removed in the future. Use the `template` and `templateOptions` fields instead. */
    options?: Record<string, any>;
    /** The template of the agent; Template options are required for templated agents. */
    template?: Flatfile.AgentTemplateEnum;
    /** The options for a templated agent. Must be provided if `template` is provided. */
    templateOptions?: Flatfile.TemplateOptions;
    /** Whether the agent is a system agent. This should be false for all agents created by users. */
    isSystem?: boolean;
    /** The namespace this agent should be limited to. Right now, this is information only and not used to actually filter agents that run, so you must still specify the namespace filter in the agent code. */
    namespace?: string;
    /** Package versions information for the agent */
    packageVersions?: Record<string, string>;
    /** Commit information for the agent */
    commitInfo?: Record<string, any>;
}

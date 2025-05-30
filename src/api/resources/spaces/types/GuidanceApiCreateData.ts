/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         guideSlug: "getting-started",
 *         options: {
 *             target: "getting-started",
 *             trigger: Flatfile.TriggerEnum.First,
 *             type: Flatfile.TypeEnum.Sidebar,
 *             role: Flatfile.RoleEnum.Admin
 *         }
 *     }
 */
export interface GuidanceApiCreateData {
    guideSlug: string;
    /** Options for the guidance */
    options: Flatfile.GuidanceOptions;
}

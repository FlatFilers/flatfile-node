/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "mapping-rule-id",
 *                 name: "Assign mapping rule",
 *                 type: "assign",
 *                 config: {},
 *                 confidence: 1,
 *                 createdBy: "us_usr_YOUR_ID",
 *                 createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 updatedAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 metadata: {}
 *             }]
 *     }
 */
export interface MappingRulesResponse {
    data: Flatfile.MappingRule[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         id: "mapping-rule-id",
 *         name: "Assign mapping rule",
 *         type: "assign",
 *         config: {},
 *         confidence: 1,
 *         createdBy: "us_usr_YOUR_ID",
 *         createdAt: "2021-01-01T00:00:00Z",
 *         updatedAt: "2021-01-01T00:00:00Z",
 *         metadata: {}
 *     }
 */
export interface MappingRule extends Flatfile.MappingRuleConfig {
    /** ID of the mapping rule */
    id: Flatfile.MappingId;
    /** Confidence of the mapping rule */
    confidence?: number;
    /** User ID of the user who suggested the mapping rule */
    createdBy?: Flatfile.UserId;
    /** Time the mapping rule was created */
    createdAt: Date;
    /** Time the mapping rule was last updated */
    updatedAt: Date;
    /** Time the mapping rule was deleted */
    deletedAt?: Date;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Configuration for AI-powered rule creation jobs that generate or replace field constraints
 */
export interface AiRuleCreationJobConfig {
    /** The natural language description of the rule to be created */
    prompt: string;
    /** The ID of the sheet containing the field to create/update the rule for */
    sheetId: Flatfile.SheetId;
    /** The key of the field to create/update the rule for */
    fieldKey: string;
    /** To edit an existing rule, provide the index of the constraint in the constraints array for the field and that constraint will be replaced. */
    index?: number;
}
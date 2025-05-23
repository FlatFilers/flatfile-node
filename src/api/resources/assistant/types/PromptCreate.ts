/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Create a prompts
 *
 * @example
 *     {
 *         prompt: "Combine first name and last name into a new column called Full Name",
 *         environmentId: "us_env_YOUR_ID",
 *         spaceId: "us_sp_YOUR_ID"
 *     }
 */
export interface PromptCreate {
    /** Type of prompt; Defaults to AI_ASSIST */
    promptType?: Flatfile.PromptTypeEnum;
    prompt: string;
    environmentId: Flatfile.EnvironmentId;
    spaceId: Flatfile.SpaceId;
}

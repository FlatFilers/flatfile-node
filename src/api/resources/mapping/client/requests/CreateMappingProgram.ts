/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

export interface CreateMappingProgram {
    /**
     * The ID of the environment
     */
    environmentId?: Flatfile.EnvironmentId;
    body: Flatfile.ProgramConfig;
}

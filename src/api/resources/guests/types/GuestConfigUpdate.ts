/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Properties used to update an existing guest
 */
export interface GuestConfigUpdate {
    environmentId?: Flatfile.EnvironmentId;
    email?: string;
    name?: string;
    spaces?: Flatfile.GuestSpace[];
}

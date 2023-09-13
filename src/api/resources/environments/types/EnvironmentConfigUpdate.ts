/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Properties used to update an environment
 *
 * @example
 *     {
 *         name: "dev",
 *         isProd: false,
 *         guestAuthentication: [Flatfile.GuestAuthenticationEnum.MagicLink],
 *         metadata: {
 *             "key": "value"
 *         }
 *     }
 */
export interface EnvironmentConfigUpdate {
    /** The name of the environment */
    name?: string;
    /** Whether or not the environment is a production environment */
    isProd?: boolean;
    guestAuthentication?: Flatfile.GuestAuthenticationEnum[];
    metadata?: Record<string, any>;
    translationPath?: string;
}
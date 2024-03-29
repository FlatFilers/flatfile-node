/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Credentials to authenticate an user
 */
export type Credentials = Flatfile.Credentials.UserCredentials | Flatfile.Credentials.ApiCredentials;

export declare namespace Credentials {
    interface UserCredentials extends Flatfile.UserCredentials {
        type: "userCredentials";
    }

    interface ApiCredentials extends Flatfile.ApiCredentials {
        type: "apiCredentials";
    }
}

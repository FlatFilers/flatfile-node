/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

export interface CreateFileRequest {
    spaceId: Flatfile.SpaceId;
    environmentId: Flatfile.EnvironmentId;
    file: string;
}

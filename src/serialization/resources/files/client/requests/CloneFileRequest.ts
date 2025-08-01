/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Flatfile from "../../../../../api/index";
import * as core from "../../../../../core";

export const CloneFileRequest: core.serialization.Schema<serializers.CloneFileRequest.Raw, Flatfile.CloneFileRequest> =
    core.serialization.object({
        prefix: core.serialization.string().optional(),
    });

export declare namespace CloneFileRequest {
    export interface Raw {
        prefix?: string | null;
    }
}

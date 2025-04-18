/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { Version } from "./Version";

export const VersionResponse: core.serialization.ObjectSchema<
    serializers.VersionResponse.Raw,
    Flatfile.VersionResponse
> = core.serialization.object({
    data: Version,
});

export declare namespace VersionResponse {
    export interface Raw {
        data: Version.Raw;
    }
}

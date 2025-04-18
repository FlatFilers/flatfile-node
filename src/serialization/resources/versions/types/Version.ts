/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { VersionId } from "../../commons/types/VersionId";

export const Version: core.serialization.ObjectSchema<serializers.Version.Raw, Flatfile.Version> =
    core.serialization.object({
        versionId: VersionId,
    });

export declare namespace Version {
    export interface Raw {
        versionId: VersionId.Raw;
    }
}

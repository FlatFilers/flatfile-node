/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const JobType: core.serialization.Schema<serializers.JobType.Raw, Flatfile.JobType> = core.serialization.enum_([
    "file",
    "workbook",
    "sheet",
    "space",
    "document",
    "app",
    "agent",
    "autobuild",
    "onboarding",
]);

export declare namespace JobType {
    export type Raw =
        | "file"
        | "workbook"
        | "sheet"
        | "space"
        | "document"
        | "app"
        | "agent"
        | "autobuild"
        | "onboarding";
}

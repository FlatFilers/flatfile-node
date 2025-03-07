/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Domain: core.serialization.Schema<serializers.Domain.Raw, Flatfile.Domain> = core.serialization.enum_([
    "file",
    "space",
    "workbook",
    "job",
    "document",
    "sheet",
    "program",
    "secret",
    "cron",
    "environment",
    "data-clip",
    "canvas",
    "canvas-area",
]);

export declare namespace Domain {
    type Raw =
        | "file"
        | "space"
        | "workbook"
        | "job"
        | "document"
        | "sheet"
        | "program"
        | "secret"
        | "cron"
        | "environment"
        | "data-clip"
        | "canvas"
        | "canvas-area";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const WorkbookId: core.serialization.Schema<serializers.WorkbookId.Raw, Flatfile.WorkbookId> =
    core.serialization.string();

export declare namespace WorkbookId {
    export type Raw = string;
}

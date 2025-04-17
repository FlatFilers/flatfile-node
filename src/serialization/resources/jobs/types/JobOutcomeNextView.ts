/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const JobOutcomeNextView: core.serialization.ObjectSchema<
    serializers.JobOutcomeNextView.Raw,
    Flatfile.JobOutcomeNextView
> = core.serialization.object({
    sheetId: core.serialization.string(),
    hiddenColumns: core.serialization.list(core.serialization.string()),
    label: core.serialization.string().optional(),
});

export declare namespace JobOutcomeNextView {
    export interface Raw {
        sheetId: string;
        hiddenColumns: string[];
        label?: string | null;
    }
}

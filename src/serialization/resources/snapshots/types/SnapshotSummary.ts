/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SummarySection } from "./SummarySection";
import { SchemaDiffRecord } from "./SchemaDiffRecord";
import { SheetConfig } from "../../sheets/types/SheetConfig";
import { SchemaDiffEnum } from "./SchemaDiffEnum";

export const SnapshotSummary: core.serialization.ObjectSchema<
    serializers.SnapshotSummary.Raw,
    Flatfile.SnapshotSummary
> = core.serialization.object({
    createdSince: SummarySection,
    updatedSince: SummarySection,
    deletedSince: SummarySection,
    schemaDiff: SchemaDiffRecord,
    config: SheetConfig,
});

export declare namespace SnapshotSummary {
    export interface Raw {
        createdSince: SummarySection.Raw;
        updatedSince: SummarySection.Raw;
        deletedSince: SummarySection.Raw;
        schemaDiff: SchemaDiffRecord.Raw;
        config: SheetConfig.Raw;
    }
}

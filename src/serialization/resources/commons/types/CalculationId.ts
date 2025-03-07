/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const CalculationId: core.serialization.Schema<serializers.CalculationId.Raw, Flatfile.CalculationId> =
    core.serialization.string();

export declare namespace CalculationId {
    type Raw = string;
}

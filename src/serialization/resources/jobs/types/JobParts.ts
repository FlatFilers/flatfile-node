/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { JobPartsArray } from "./JobPartsArray";

export const JobParts: core.serialization.Schema<serializers.JobParts.Raw, Flatfile.JobParts> =
    core.serialization.undiscriminatedUnion([core.serialization.number(), JobPartsArray]);

export declare namespace JobParts {
    type Raw = number | JobPartsArray.Raw;
}

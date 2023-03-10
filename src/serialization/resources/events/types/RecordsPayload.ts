/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Flatfile } from "@flatfile/api-beta";
import * as core from "../../../../core";

export const RecordsPayload: core.serialization.ObjectSchema<serializers.RecordsPayload.Raw, Flatfile.RecordsPayload> =
    core.serialization.object({
        count: core.serialization.number(),
    });

export declare namespace RecordsPayload {
    interface Raw {
        count: number;
    }
}

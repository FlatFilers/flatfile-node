/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const Error_: core.serialization.ObjectSchema<serializers.Error_.Raw, Flatfile.Error_> =
    core.serialization.object({
        key: core.serialization.string().optional(),
        message: core.serialization.string(),
    });

export declare namespace Error_ {
    export interface Raw {
        key?: string | null;
        message: string;
    }
}

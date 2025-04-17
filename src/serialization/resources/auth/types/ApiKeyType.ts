/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ApiKeyType: core.serialization.Schema<serializers.ApiKeyType.Raw, Flatfile.ApiKeyType> =
    core.serialization.enum_(["PUBLISHABLE", "SECRET"]);

export declare namespace ApiKeyType {
    export type Raw = "PUBLISHABLE" | "SECRET";
}

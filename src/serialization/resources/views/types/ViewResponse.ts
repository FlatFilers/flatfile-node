/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { View } from "./View";

export const ViewResponse: core.serialization.ObjectSchema<serializers.ViewResponse.Raw, Flatfile.ViewResponse> =
    core.serialization.object({
        data: View,
    });

export declare namespace ViewResponse {
    interface Raw {
        data: View.Raw;
    }
}

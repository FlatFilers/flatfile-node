/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { App } from "./App";

export const AppResponse: core.serialization.ObjectSchema<serializers.AppResponse.Raw, Flatfile.AppResponse> =
    core.serialization.object({
        data: App,
    });

export declare namespace AppResponse {
    interface Raw {
        data: App.Raw;
    }
}

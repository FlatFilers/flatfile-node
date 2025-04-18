/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { App } from "./App";

export const AppResponse: core.serialization.ObjectSchema<serializers.AppResponse.Raw, Flatfile.AppResponse> =
    core.serialization.object({
        data: App,
    });

export declare namespace AppResponse {
    export interface Raw {
        data: App.Raw;
    }
}

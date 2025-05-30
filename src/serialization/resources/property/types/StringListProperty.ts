/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { BaseProperty } from "./BaseProperty";

export const StringListProperty: core.serialization.ObjectSchema<
    serializers.StringListProperty.Raw,
    Flatfile.StringListProperty
> = core.serialization.object({}).extend(BaseProperty);

export declare namespace StringListProperty {
    export interface Raw extends BaseProperty.Raw {}
}

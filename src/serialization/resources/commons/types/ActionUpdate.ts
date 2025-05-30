/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { ActionWithoutLabel } from "./ActionWithoutLabel";

export const ActionUpdate: core.serialization.ObjectSchema<serializers.ActionUpdate.Raw, Flatfile.ActionUpdate> =
    core.serialization
        .object({
            label: core.serialization.string().optional(),
        })
        .extend(ActionWithoutLabel);

export declare namespace ActionUpdate {
    export interface Raw extends ActionWithoutLabel.Raw {
        label?: string | null;
    }
}

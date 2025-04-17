/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { AppId } from "../../commons/types/AppId";

export const ConstraintCreate: core.serialization.ObjectSchema<
    serializers.ConstraintCreate.Raw,
    Flatfile.ConstraintCreate
> = core.serialization.object({
    description: core.serialization.string().optional(),
    function: core.serialization.string().optional(),
    options: core.serialization.any().optional(),
    label: core.serialization.string().optional(),
    validator: core.serialization.string().optional(),
    appId: AppId.optional(),
});

export declare namespace ConstraintCreate {
    export interface Raw {
        description?: string | null;
        function?: string | null;
        options?: any | null;
        label?: string | null;
        validator?: string | null;
        appId?: AppId.Raw | null;
    }
}

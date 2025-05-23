/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { TriggerEnum } from "./TriggerEnum";
import { TypeEnum } from "./TypeEnum";
import { RoleEnum } from "./RoleEnum";

export const GuidanceOptions: core.serialization.ObjectSchema<
    serializers.GuidanceOptions.Raw,
    Flatfile.GuidanceOptions
> = core.serialization.object({
    target: core.serialization.string(),
    trigger: TriggerEnum,
    type: TypeEnum,
    role: RoleEnum.optional(),
});

export declare namespace GuidanceOptions {
    export interface Raw {
        target: string;
        trigger: TriggerEnum.Raw;
        type: TypeEnum.Raw;
        role?: RoleEnum.Raw | null;
    }
}

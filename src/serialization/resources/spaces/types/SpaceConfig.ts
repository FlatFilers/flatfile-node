/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { GuestAuthenticationEnum } from "../../environments/types/GuestAuthenticationEnum";
import { InternalSpaceConfigBase } from "./InternalSpaceConfigBase";

export const SpaceConfig: core.serialization.ObjectSchema<serializers.SpaceConfig.Raw, Flatfile.SpaceConfig> =
    core.serialization
        .object({
            name: core.serialization.string().optional(),
            displayOrder: core.serialization.number().optional(),
            guestAuthentication: core.serialization.list(GuestAuthenticationEnum).optional(),
        })
        .extend(InternalSpaceConfigBase);

export declare namespace SpaceConfig {
    export interface Raw extends InternalSpaceConfigBase.Raw {
        name?: string | null;
        displayOrder?: number | null;
        guestAuthentication?: GuestAuthenticationEnum.Raw[] | null;
    }
}

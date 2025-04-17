/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { SpaceId } from "../../commons/types/SpaceId";
import { UserId } from "../../commons/types/UserId";
import { SpaceSize } from "./SpaceSize";
import { GuestAuthenticationEnum } from "../../environments/types/GuestAuthenticationEnum";
import { InternalSpaceConfigBase } from "./InternalSpaceConfigBase";

export const Space: core.serialization.ObjectSchema<serializers.Space.Raw, Flatfile.Space> = core.serialization
    .object({
        id: SpaceId,
        workbooksCount: core.serialization.number().optional(),
        filesCount: core.serialization.number().optional(),
        createdByUserId: UserId.optional(),
        createdByUserName: core.serialization.string().optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        expiredAt: core.serialization.date().optional(),
        lastActivityAt: core.serialization.date().optional(),
        guestLink: core.serialization.string().optional(),
        name: core.serialization.string(),
        displayOrder: core.serialization.number().optional(),
        accessToken: core.serialization.string().optional(),
        isCollaborative: core.serialization.boolean().optional(),
        size: SpaceSize.optional(),
        upgradedAt: core.serialization.date().optional(),
        guestAuthentication: core.serialization.list(GuestAuthenticationEnum),
    })
    .extend(InternalSpaceConfigBase);

export declare namespace Space {
    export interface Raw extends InternalSpaceConfigBase.Raw {
        id: SpaceId.Raw;
        workbooksCount?: number | null;
        filesCount?: number | null;
        createdByUserId?: UserId.Raw | null;
        createdByUserName?: string | null;
        createdAt: string;
        updatedAt: string;
        expiredAt?: string | null;
        lastActivityAt?: string | null;
        guestLink?: string | null;
        name: string;
        displayOrder?: number | null;
        accessToken?: string | null;
        isCollaborative?: boolean | null;
        size?: SpaceSize.Raw | null;
        upgradedAt?: string | null;
        guestAuthentication: GuestAuthenticationEnum.Raw[];
    }
}

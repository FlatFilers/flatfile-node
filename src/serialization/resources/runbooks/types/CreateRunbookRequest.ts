/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { AccountId } from "../../commons/types/AccountId";
import { AppId } from "../../commons/types/AppId";
import { EnvironmentId } from "../../commons/types/EnvironmentId";
import { SpaceId } from "../../commons/types/SpaceId";
import { RunbookConfig } from "./RunbookConfig";
import { RunbookStatus } from "./RunbookStatus";
import { RunbookType } from "./RunbookType";

export const CreateRunbookRequest: core.serialization.ObjectSchema<
    serializers.CreateRunbookRequest.Raw,
    Flatfile.CreateRunbookRequest
> = core.serialization.object({
    accountId: AccountId,
    appId: AppId,
    environmentId: EnvironmentId,
    spaceId: SpaceId,
    name: core.serialization.string(),
    config: RunbookConfig,
    status: RunbookStatus,
    type: RunbookType,
});

export declare namespace CreateRunbookRequest {
    export interface Raw {
        accountId: AccountId.Raw;
        appId: AppId.Raw;
        environmentId: EnvironmentId.Raw;
        spaceId: SpaceId.Raw;
        name: string;
        config: RunbookConfig.Raw;
        status: RunbookStatus.Raw;
        type: RunbookType.Raw;
    }
}

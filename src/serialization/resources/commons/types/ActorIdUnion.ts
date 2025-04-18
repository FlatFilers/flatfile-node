/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { UserId } from "./UserId";
import { AgentId } from "./AgentId";
import { GuestId } from "./GuestId";

export const ActorIdUnion: core.serialization.Schema<serializers.ActorIdUnion.Raw, Flatfile.ActorIdUnion> =
    core.serialization.undiscriminatedUnion([UserId, AgentId, GuestId]);

export declare namespace ActorIdUnion {
    export type Raw = UserId.Raw | AgentId.Raw | GuestId.Raw;
}

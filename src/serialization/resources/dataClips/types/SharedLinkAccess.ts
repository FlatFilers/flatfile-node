/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const SharedLinkAccess: core.serialization.Schema<serializers.SharedLinkAccess.Raw, Flatfile.SharedLinkAccess> =
    core.serialization.enum_(["public", "restricted"]);

export declare namespace SharedLinkAccess {
    export type Raw = "public" | "restricted";
}

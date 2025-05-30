/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const GuestAuthenticationEnum: core.serialization.Schema<
    serializers.GuestAuthenticationEnum.Raw,
    Flatfile.GuestAuthenticationEnum
> = core.serialization.enum_(["shared_link", "magic_link"]);

export declare namespace GuestAuthenticationEnum {
    export type Raw = "shared_link" | "magic_link";
}

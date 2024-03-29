/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Driver: core.serialization.Schema<serializers.Driver.Raw, Flatfile.Driver> = core.serialization.enum_([
    "csv",
]);

export declare namespace Driver {
    type Raw = "csv";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const SpaceSize: core.serialization.ObjectSchema<serializers.spaces.SpaceSize.Raw, Flatfile.spaces.SpaceSize> =
    core.serialization.object({
        name: core.serialization.string(),
        id: core.serialization.string(),
        numUsers: core.serialization.number(),
        pdv: core.serialization.number(),
        numFiles: core.serialization.number(),
    });

export declare namespace SpaceSize {
    interface Raw {
        name: string;
        id: string;
        numUsers: number;
        pdv: number;
        numFiles: number;
    }
}
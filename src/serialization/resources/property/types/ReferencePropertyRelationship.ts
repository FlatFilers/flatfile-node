/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";

export const ReferencePropertyRelationship: core.serialization.Schema<
    serializers.ReferencePropertyRelationship.Raw,
    Flatfile.ReferencePropertyRelationship
> = core.serialization.enum_(["has-one", "has-many"]);

export declare namespace ReferencePropertyRelationship {
    export type Raw = "has-one" | "has-many";
}

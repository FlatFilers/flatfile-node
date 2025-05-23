/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export type ActionConstraint =
    | Flatfile.ActionConstraint.HasAllValid
    | Flatfile.ActionConstraint.HasSelection
    | Flatfile.ActionConstraint.HasData
    | Flatfile.ActionConstraint.HasColumnEnabled;

export namespace ActionConstraint {
    export interface HasAllValid extends Flatfile.ActionConstraintHasAllValid {
        type: "hasAllValid";
    }

    export interface HasSelection extends Flatfile.ActionConstraintHasSelection {
        type: "hasSelection";
    }

    export interface HasData extends Flatfile.ActionConstraintHasData {
        type: "hasData";
    }

    export interface HasColumnEnabled extends Flatfile.ActionConstraintHasColumnEnabled {
        type: "hasColumnEnabled";
    }
}

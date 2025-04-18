/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Flatfile from "../../../../api/index";
import * as core from "../../../../core";
import { StringProperty } from "./StringProperty";
import { NumberProperty } from "./NumberProperty";
import { BooleanProperty } from "./BooleanProperty";
import { DateProperty } from "./DateProperty";
import { EnumProperty } from "./EnumProperty";
import { ReferenceProperty } from "./ReferenceProperty";
import { ReferenceListProperty } from "./ReferenceListProperty";
import { StringListProperty } from "./StringListProperty";
import { EnumListProperty } from "./EnumListProperty";

export const Property: core.serialization.Schema<serializers.Property.Raw, Flatfile.Property> = core.serialization
    .union("type", {
        string: StringProperty,
        number: NumberProperty,
        boolean: BooleanProperty,
        date: DateProperty,
        enum: EnumProperty,
        reference: ReferenceProperty,
        "reference-list": ReferenceListProperty,
        "string-list": StringListProperty,
        "enum-list": EnumListProperty,
    })
    .transform<Flatfile.Property>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Property {
    export type Raw =
        | Property.String
        | Property.Number
        | Property.Boolean
        | Property.Date
        | Property.Enum
        | Property.Reference
        | Property.ReferenceList
        | Property.StringList
        | Property.EnumList;

    export interface String extends StringProperty.Raw {
        type: "string";
    }

    export interface Number extends NumberProperty.Raw {
        type: "number";
    }

    export interface Boolean extends BooleanProperty.Raw {
        type: "boolean";
    }

    export interface Date extends DateProperty.Raw {
        type: "date";
    }

    export interface Enum extends EnumProperty.Raw {
        type: "enum";
    }

    export interface Reference extends ReferenceProperty.Raw {
        type: "reference";
    }

    export interface ReferenceList extends ReferenceListProperty.Raw {
        type: "reference-list";
    }

    export interface StringList extends StringListProperty.Raw {
        type: "string-list";
    }

    export interface EnumList extends EnumListProperty.Raw {
        type: "enum-list";
    }
}

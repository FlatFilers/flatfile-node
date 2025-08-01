/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         type: "string",
 *         key: "code",
 *         label: "Product Code",
 *         description: "Unique identifier defining an individual product.",
 *         constraints: [{
 *                 type: "unique",
 *                 config: {
 *                     caseSensitive: false,
 *                     message: "Custom unique constraint message",
 *                     level: Flatfile.ValidationType.Warn
 *                 }
 *             }],
 *         config: {
 *             size: Flatfile.StringConfigOptions.Tiny
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "number",
 *         key: "price",
 *         config: {
 *             decimalPlaces: 2
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "boolean",
 *         key: "editable",
 *         config: {
 *             allowIndeterminate: true
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "date",
 *         key: "Start date"
 *     }
 *
 * @example
 *     {
 *         type: "enum",
 *         key: "category",
 *         label: "Product Category",
 *         isArray: false,
 *         multi: true,
 *         config: {
 *             allowCustom: false,
 *             options: [{
 *                     value: 9,
 *                     label: "Kitchenware",
 *                     icon: "pots-and-pans",
 *                     color: "#f00000",
 *                     meta: {
 *                         "product_code_prefix": "KI-"
 *                     }
 *                 }, {
 *                     value: 9,
 *                     label: "Clothing",
 *                     meta: {
 *                         "product_code_prefix": "CL-"
 *                     }
 *                 }]
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "reference",
 *         key: "user reference",
 *         config: {
 *             ref: "/sheet/users/3",
 *             key: "id"
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "firstName"
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "firstName",
 *         label: "First Name"
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "lastName"
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "lastName",
 *         label: "Last Name"
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "email"
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "email",
 *         label: "Email"
 *     }
 *
 * @example
 *     {
 *         type: "string",
 *         key: "requiredField",
 *         label: "Required Field",
 *         constraints: [{
 *                 type: "required",
 *                 config: {
 *                     message: "This field must be filled out",
 *                     level: Flatfile.ValidationType.Error
 *                 }
 *             }]
 *     }
 */
export type Property =
    | Flatfile.Property.String
    | Flatfile.Property.Number
    | Flatfile.Property.Boolean
    | Flatfile.Property.Date_
    | Flatfile.Property.Enum
    | Flatfile.Property.Reference
    | Flatfile.Property.ReferenceList
    | Flatfile.Property.StringList
    | Flatfile.Property.EnumList;

export namespace Property {
    export interface String extends Flatfile.StringProperty {
        type: "string";
    }

    export interface Number extends Flatfile.NumberProperty {
        type: "number";
    }

    export interface Boolean extends Flatfile.BooleanProperty {
        type: "boolean";
    }

    export interface Date_ extends Flatfile.DateProperty {
        type: "date";
    }

    export interface Enum extends Flatfile.EnumProperty {
        type: "enum";
    }

    export interface Reference extends Flatfile.ReferenceProperty {
        type: "reference";
    }

    export interface ReferenceList extends Flatfile.ReferenceListProperty {
        type: "reference-list";
    }

    export interface StringList extends Flatfile.StringListProperty {
        type: "string-list";
    }

    export interface EnumList extends Flatfile.EnumListProperty {
        type: "enum-list";
    }
}

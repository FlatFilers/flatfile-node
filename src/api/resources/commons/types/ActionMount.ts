/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export type ActionMount =
    | Flatfile.ActionMount.Sheet
    | Flatfile.ActionMount.Workbook
    | Flatfile.ActionMount.Field
    | Flatfile.ActionMount.Document
    | Flatfile.ActionMount.File_;

export namespace ActionMount {
    export interface Sheet extends Flatfile.ActionMountSheet {
        type: "sheet";
    }

    export interface Workbook extends Flatfile.ActionMountWorkbook {
        type: "workbook";
    }

    export interface Field extends Flatfile.ActionMountField {
        type: "field";
    }

    export interface Document extends Flatfile.ActionMountDocument {
        type: "document";
    }

    export interface File_ extends Flatfile.ActionMountFile {
        type: "file";
    }
}

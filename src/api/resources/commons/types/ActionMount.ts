/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export type ActionMount =
    | Flatfile.ActionMount.Sheet
    | Flatfile.ActionMount.Workbook
    | Flatfile.ActionMount.Field
    | Flatfile.ActionMount.Document
    | Flatfile.ActionMount.File_;

export declare namespace ActionMount {
    interface Sheet extends Flatfile.ActionMountSheet {
        type: "sheet";
    }

    interface Workbook extends Flatfile.ActionMountWorkbook {
        type: "workbook";
    }

    interface Field extends Flatfile.ActionMountField {
        type: "field";
    }

    interface Document extends Flatfile.ActionMountDocument {
        type: "document";
    }

    interface File_ extends Flatfile.ActionMountFile {
        type: "file";
    }
}
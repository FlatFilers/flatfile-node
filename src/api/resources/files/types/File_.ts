/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Any uploaded file of any type
 *
 * @example
 *     {
 *         id: "us_fl_YOUR_ID",
 *         name: "Test File",
 *         description: "This is a test file",
 *         ext: "png",
 *         mimetype: "image/png",
 *         encoding: "7bit",
 *         status: Flatfile.ModelFileStatusEnum.Partial,
 *         mode: Flatfile.Mode.Import,
 *         size: 81953,
 *         bytesReceived: 81593,
 *         createdAt: new Date("2023-11-15T19:31:33.015Z"),
 *         updatedAt: new Date("2023-11-15T19:31:33.015Z"),
 *         spaceId: "us_sp_YOUR_ID"
 *     }
 *
 * @example
 *     {
 *         id: "us_fl_YOUR_ID",
 *         name: "NewFileName",
 *         description: "This is a new test file",
 *         ext: "png",
 *         mimetype: "image/png",
 *         encoding: "7bit",
 *         status: Flatfile.ModelFileStatusEnum.Partial,
 *         mode: Flatfile.Mode.Import,
 *         size: 81953,
 *         bytesReceived: 81593,
 *         createdAt: new Date("2023-11-15T19:31:33.015Z"),
 *         updatedAt: new Date("2023-11-15T19:31:33.015Z"),
 *         spaceId: "us_sp_YOUR_ID"
 *     }
 */
export interface File_ {
    id: Flatfile.FileId;
    /** Original filename */
    name: string;
    /** Description of the file */
    description?: string;
    /** Extension of the file */
    ext: string;
    /** MIME Type of the file */
    mimetype: string;
    /** Text encoding of the file */
    encoding: string;
    /** Status of the file */
    status: Flatfile.ModelFileStatusEnum;
    /** The storage mode of file */
    mode?: Flatfile.Mode;
    /** Size of file in bytes */
    size: number;
    /** Number of bytes that have been uploaded so far (useful for progress tracking) */
    bytesReceived: number;
    /** Date the file was created */
    createdAt: Date;
    /** Date the file was last updated */
    updatedAt: Date;
    /** Date the file was expired */
    expiredAt?: Date;
    spaceId: Flatfile.SpaceId;
    workbookId?: Flatfile.WorkbookId;
    sheetId?: Flatfile.SheetId;
    actions?: Flatfile.Action[];
    origin?: Flatfile.FileOrigin;
}

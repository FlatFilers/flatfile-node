/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_fl_YOUR_ID",
 *                 name: "Test File",
 *                 description: "This is a test file",
 *                 ext: "png",
 *                 mimetype: "image/png",
 *                 encoding: "7bit",
 *                 status: Flatfile.ModelFileStatusEnum.Partial,
 *                 mode: Flatfile.Mode.Import,
 *                 size: 81953,
 *                 bytesReceived: 81593,
 *                 createdAt: "2023-11-15T19:31:33.015Z",
 *                 updatedAt: "2023-11-15T19:31:33.015Z",
 *                 spaceId: "us_sp_YOUR_ID"
 *             }],
 *         pagination: {
 *             currentPage: 3,
 *             pageCount: 50,
 *             totalCount: 100
 *         }
 *     }
 */
export interface ListFilesResponse {
    pagination?: Flatfile.Pagination;
    data: Flatfile.File_[];
}

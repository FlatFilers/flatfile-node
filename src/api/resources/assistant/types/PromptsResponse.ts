/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_pr_YOUR_ID",
 *                 createdById: "us_usr_YOUR_ID",
 *                 accountId: "us_acc_YOUR_ID",
 *                 environmentId: "us_env_YOUR_ID",
 *                 spaceId: "us_sp_YOUR_ID",
 *                 promptType: Flatfile.PromptTypeEnum.AiAssist,
 *                 prompt: "Combine first name and last name into a new column called Full Name",
 *                 createdAt: "2021-01-01T00:00:00Z",
 *                 updatedAt: "2021-01-01T00:00:00Z"
 *             }],
 *         pagination: {
 *             currentPage: 3,
 *             pageCount: 50,
 *             totalCount: 100
 *         }
 *     }
 */
export interface PromptsResponse {
    pagination?: Flatfile.Pagination;
    data: Flatfile.Prompt[];
}

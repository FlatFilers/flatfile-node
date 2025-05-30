/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "us_gu_YOUR_ID",
 *                 description: "Getting started guide",
 *                 title: "Importing your data",
 *                 slug: "getting-started",
 *                 versions: [],
 *                 blocks: [],
 *                 metadata: {
 *                     "category": "onboarding"
 *                 },
 *                 createdAt: "2023-10-30T16:59:45.735Z",
 *                 updatedAt: "2023-10-30T16:59:45.735Z"
 *             }]
 *     }
 */
export interface GuideListResponse {
    data: Flatfile.GuideResource[];
}

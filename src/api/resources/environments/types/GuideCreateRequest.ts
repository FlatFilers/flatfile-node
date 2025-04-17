/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Create a guide
 *
 * @example
 *     {
 *         description: "Getting started guide",
 *         title: "Data import made easy",
 *         slug: "getting-started",
 *         environmentId: "commons.EnvironmentId",
 *         versions: [],
 *         blocks: [],
 *         metadata: {
 *             "category": "onboarding"
 *         }
 *     }
 */
export interface GuideCreateRequest {
    description: string;
    title: string;
    metadata?: Record<string, any>;
    slug: string;
    versions: Flatfile.GuideVersionResource[];
    blocks: (Record<string, any> | undefined)[];
    environmentId: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * @example
 *     {
 *         data: {
 *             header: ["Name", "Age", "City", "", ""],
 *             headerRow: 0,
 *             letters: ["A", "B", "C"]
 *         }
 *     }
 */
export interface DetectHeaderResponse {
    data: Flatfile.HeaderDetectionResult;
}

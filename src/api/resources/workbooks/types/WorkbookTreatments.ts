/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Available treatments for a workbook
 *
 * @example
 *     Flatfile.WorkbookTreatments.ExtractedFromSource
 */
export type WorkbookTreatments = "EXTRACTED_FROM_SOURCE" | "SMALL_DATA";
export const WorkbookTreatments = {
    ExtractedFromSource: "EXTRACTED_FROM_SOURCE",
    SmallData: "SMALL_DATA",
} as const;

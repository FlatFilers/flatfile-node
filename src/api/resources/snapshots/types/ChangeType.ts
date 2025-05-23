/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Options to filter records in a snapshot
 */
export type ChangeType = "createdSince" | "updatedSince" | "deletedSince";
export const ChangeType = {
    CreatedSince: "createdSince",
    UpdatedSince: "updatedSince",
    DeletedSince: "deletedSince",
} as const;

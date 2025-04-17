/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Foreground actions will prevent interacting with the resource until complete
 */
export type ActionMode = "foreground" | "background" | "toolbarBlocking";
export const ActionMode = {
    Foreground: "foreground",
    Background: "background",
    ToolbarBlocking: "toolbarBlocking",
} as const;

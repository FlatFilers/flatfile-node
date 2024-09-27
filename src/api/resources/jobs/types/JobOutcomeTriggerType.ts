/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Whether a job outcome's effect should be triggered automatically
 */
export type JobOutcomeTriggerType = "manual" | "automatic" | "automatic_silent";

export const JobOutcomeTriggerType = {
    Manual: "manual",
    Automatic: "automatic",
    AutomaticSilent: "automatic_silent",
} as const;
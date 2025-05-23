/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CalculationType =
    | "COUNT_EMPTY"
    | "COUNT_NON_EMPTY"
    | "PERCENT_EMPTY"
    | "PERCENT_NON_EMPTY"
    | "COUNT_CHANGED"
    | "PERCENT_CHANGED";
export const CalculationType = {
    CountEmpty: "COUNT_EMPTY",
    CountNonEmpty: "COUNT_NON_EMPTY",
    PercentEmpty: "PERCENT_EMPTY",
    PercentNonEmpty: "PERCENT_NON_EMPTY",
    CountChanged: "COUNT_CHANGED",
    PercentChanged: "PERCENT_CHANGED",
} as const;

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * How much text should be storeable in this field
 */
export type StringConfigOptions =
    /**
     * up to 255 characters */
    | "tiny"
    /**
     * 64kb (default) */
    | "normal"
    /**
     * 16mb */
    | "medium"
    /**
     * 4gb */
    | "long";
export const StringConfigOptions = {
    Tiny: "tiny",
    Normal: "normal",
    Medium: "medium",
    Long: "long",
} as const;

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An entitlement belonging to a resource
 *
 * @example
 *     {
 *         key: "snapshots",
 *         metadata: {
 *             "files": 10
 *         }
 *     }
 */
export interface Entitlement {
    /** Short name for the entitlement */
    key: string;
    /** Contains conditions or limits for an entitlement */
    metadata?: any;
}

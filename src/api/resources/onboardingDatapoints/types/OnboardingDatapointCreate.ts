/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * Data required to create a new onboarding datapoint
 */
export interface OnboardingDatapointCreate {
    onboardingId: Flatfile.OnboardingId;
    /** The source of the datapoint, e.g., "company-research", "user-input". */
    source?: string;
    /** The JSON data to store in the datapoint. */
    data?: any;
}

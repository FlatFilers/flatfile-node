/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface InternalSpaceConfigBase {
    spaceConfigId?: Flatfile.SpaceConfigId;
    environmentId: Flatfile.EnvironmentId;
    primaryWorkbookId?: Flatfile.WorkbookId;
    /** Metadata for the space */
    metadata?: any;
    actions?: Flatfile.Action[];
    guestAuthentication?: Flatfile.GuestAuthenticationEnum[];
    access?: Flatfile.spaces.SpaceAccess[];
    autoConfigure?: boolean;
    namespace?: string;
}
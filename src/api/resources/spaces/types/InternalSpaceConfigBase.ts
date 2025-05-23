/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export interface InternalSpaceConfigBase {
    spaceConfigId?: Flatfile.SpaceConfigId;
    environmentId?: Flatfile.EnvironmentId;
    /** The ID of the primary workbook for the space. This should not be included in create space requests. */
    primaryWorkbookId?: Flatfile.WorkbookId;
    /** Metadata for the space */
    metadata?: any;
    /** The Space settings. */
    settings?: Flatfile.SpaceSettings;
    actions?: Flatfile.Action[];
    access?: Flatfile.SpaceAccess[];
    /** Only used during creation - will be ignored on update */
    autoConfigure?: boolean;
    namespace?: string;
    labels?: string[];
    translationsPath?: string;
    languageOverride?: string;
    /** Date when space was archived */
    archivedAt?: Date;
    /** The ID of the App that space is associated with */
    appId?: Flatfile.AppId;
    /** Whether the space is an app template. Only one space per app can be an app template. */
    isAppTemplate?: boolean;
}

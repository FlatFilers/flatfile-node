/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export interface Program {
    /** Mapping rules */
    rules: Flatfile.MappingRuleOrConfig[];
    /** If this program was saved, this is the ID of the program */
    id?: string;
    /** Namespace of the program */
    namespace?: string;
    /** Family ID of the program, if it belongs to a family */
    familyId?: Flatfile.FamilyId;
    /** If this program was saved, this is the time it was created */
    createdAt?: Date;
    /** If this program was saved, this is the user ID of the creator */
    createdBy?: Flatfile.UserId;
    /** Source keys */
    sourceKeys: string[];
    /** Destination keys */
    destinationKeys: string[];
    /** Summary of the mapping rules */
    summary?: Flatfile.ProgramSummary;
    /** If this program was saved, this token allows you to modify the program */
    accessToken?: string;
}

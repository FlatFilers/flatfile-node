import * as Flatfile from "../../api/index";
import { Sheet } from "../../serialization";

interface SheetSearchParams {
    filter?: string;
    filterField?: string;
    searchField?: string;
    searchValue?: string;
    q?: string;
    commitId?: string;
    sinceCommitId?: string;
    ids?: string;
    forEvent?: string;
}

interface SheetSortParams {
    sortField?: string;
    sortDirection?: "asc" | "desc";
}

interface PaginationParams {
    pageNumber?: number;
    pageSize?: number;
}

/**
 * Request options for records endpoint query parameters
 */
interface GetRecordsParams {
    /** The ID of the Sheet */
    sheetId?: Flatfile.SheetId;
    /** The ID of the Workbook */
    workbookId?: Flatfile.WorkbookId;
    /** The slug of the Sheet */
    sheetSlug?: string;
    /** Whether to include links in the response */
    includeLinks?: boolean;
    /** Whether to include messages in the response */
    includeMessages?: boolean;
    /** Whether to include metadata in the response */
    includeMetadata?: boolean;
    /** Whether to include config in the response */
    includeConfig?: boolean;
    /** Whether to include sheet in the response */
    includeSheet?: boolean;
    /** Whether to include sheet slug in the response */
    includeSheetSlug?: boolean;
    /** Whether to include the updated at timestamps in the response */
    includeTimestamps?: boolean;
    /** Whether to exclude context from the response */
    noContext?: boolean;
    /** Whether to stream the response */
    isStream?: boolean;
    /** Whether to include empty cells/fields in the response */
    includeEmptyCells?: boolean;
    /** Specific fields to include in the response */
    fields?: string[];
}

export type GetRecordsRequestOptions = GetRecordsParams & SheetSearchParams & SheetSortParams & PaginationParams;

interface JsonlRecordSpecialParams {
    /**
     * Record ID
     */
    __k?: string;

    /**
     * Record ID (for Creation)
     */
    __nk?: string;

    /**
     * Record version ID
     */
    __v?: string;

    /**
     * Sheet ID
     */
    __s?: string;

    /**
     * Sheet slug
     */
    __n?: string;

    /**
     * Config
     */
    __c?: Record<string, any>;

    /**
     * Metadata
     */
    __m?: Record<string, any>;

    /**
     * Messages
     */
    __i?: Record<string, any>;

    /**
     * Whether the record is deleted
     */
    __d?: boolean;

    /**
     * Whether the record is valid
     */
    __e?: boolean;

    /**
     * Links to other records
     */
    __l?: JsonlRecord[];

    /**
     * Record-level updated timestamp (when includeTimestamps=true)
     */
    __u?: string;
}

export interface JsonlRecord extends JsonlRecordSpecialParams {
    [fieldKey: string]: any;
}

/**
 * Request options for writing records
 */
interface WriteRecordsParams {
    /** The ID of the Sheet */
    sheetId?: Flatfile.SheetId;
    /** The ID of the Workbook */
    workbookId?: Flatfile.WorkbookId;
    /** The slug of the Sheet */
    sheetSlug?: string;
    /** Whether to truncate (clear) the sheet before writing */
    truncate?: boolean;
    /** Whether to create a snapshot before writing */
    snapshot?: boolean;
    /** Whether to suppress hooks during writing */
    silent?: boolean;
    /** Event ID for context */
    for?: Flatfile.EventId;
}

export type WriteRecordsRequestOptions = WriteRecordsParams;

/**
 * Response structure for write operations
 */
export interface WriteRecordsResponse {
    success: boolean;
    created?: number;
    updated?: number;
}

/**
 * Options for streaming write operations
 */
export interface WriteStreamingOptions extends WriteRecordsRequestOptions {}

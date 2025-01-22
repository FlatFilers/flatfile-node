/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The topic of the event
 *
 * @example
 *     Flatfile.EventTopic.WorkbookUpdated
 */
export type EventTopic =
    | "agent:created"
    | "agent:updated"
    | "agent:deleted"
    | "space:created"
    | "space:updated"
    | "space:deleted"
    | "space:archived"
    | "space:unarchived"
    | "space:expired"
    | "space:guestAdded"
    | "space:guestRemoved"
    | "document:created"
    | "document:updated"
    | "document:deleted"
    | "workbook:created"
    | "workbook:updated"
    | "workbook:deleted"
    | "workbook:expired"
    | "sheet:created"
    | "sheet:updated"
    | "sheet:deleted"
    | "sheet:counts-updated"
    | "snapshot:created"
    | "records:created"
    | "records:updated"
    | "records:deleted"
    | "file:created"
    | "file:updated"
    | "file:deleted"
    | "file:expired"
    | "job:created"
    | "job:updated"
    | "job:deleted"
    | "job:completed"
    | "job:ready"
    | "job:scheduled"
    | "job:outcome-acknowledged"
    | "job:parts-completed"
    | "job:failed"
    | "program:created"
    | "program:updated"
    | "commit:created"
    | "commit:updated"
    | "commit:completed"
    | "layer:created"
    | "secret:created"
    | "secret:updated"
    | "secret:deleted"
    | "cron:5-minutes"
    | "cron:hourly"
    | "cron:daily"
    | "cron:weekly"
    | "environment:created"
    | "environment:updated"
    | "environment:deleted"
    | "action:created"
    | "action:updated"
    | "action:deleted"
    | "data-clip:created"
    | "data-clip:updated"
    | "data-clip:deleted"
    | "data-clip:collaborator-updated"
    | "data-clip:resolutions-created"
    | "data-clip:resolutions-updated"
    | "data-clip:resolutions-refreshed";

export const EventTopic = {
    AgentCreated: "agent:created",
    AgentUpdated: "agent:updated",
    AgentDeleted: "agent:deleted",
    SpaceCreated: "space:created",
    SpaceUpdated: "space:updated",
    SpaceDeleted: "space:deleted",
    SpaceArchived: "space:archived",
    SpaceUnarchived: "space:unarchived",
    SpaceExpired: "space:expired",
    SpaceGuestAdded: "space:guestAdded",
    SpaceGuestRemoved: "space:guestRemoved",
    DocumentCreated: "document:created",
    DocumentUpdated: "document:updated",
    DocumentDeleted: "document:deleted",
    WorkbookCreated: "workbook:created",
    WorkbookUpdated: "workbook:updated",
    WorkbookDeleted: "workbook:deleted",
    WorkbookExpired: "workbook:expired",
    SheetCreated: "sheet:created",
    SheetUpdated: "sheet:updated",
    SheetDeleted: "sheet:deleted",
    SheetCountsUpdated: "sheet:counts-updated",
    SnapshotCreated: "snapshot:created",
    RecordsCreated: "records:created",
    RecordsUpdated: "records:updated",
    RecordsDeleted: "records:deleted",
    FileCreated: "file:created",
    FileUpdated: "file:updated",
    FileDeleted: "file:deleted",
    FileExpired: "file:expired",
    JobCreated: "job:created",
    JobUpdated: "job:updated",
    JobDeleted: "job:deleted",
    JobCompleted: "job:completed",
    JobReady: "job:ready",
    JobScheduled: "job:scheduled",
    JobOutcomeAcknowledged: "job:outcome-acknowledged",
    JobPartsCompleted: "job:parts-completed",
    JobFailed: "job:failed",
    ProgramCreated: "program:created",
    ProgramUpdated: "program:updated",
    CommitCreated: "commit:created",
    CommitUpdated: "commit:updated",
    CommitCompleted: "commit:completed",
    LayerCreated: "layer:created",
    SecretCreated: "secret:created",
    SecretUpdated: "secret:updated",
    SecretDeleted: "secret:deleted",
    Cron5Minutes: "cron:5-minutes",
    CronHourly: "cron:hourly",
    CronDaily: "cron:daily",
    CronWeekly: "cron:weekly",
    EnvironmentCreated: "environment:created",
    EnvironmentUpdated: "environment:updated",
    EnvironmentDeleted: "environment:deleted",
    ActionCreated: "action:created",
    ActionUpdated: "action:updated",
    ActionDeleted: "action:deleted",
    DataClipCreated: "data-clip:created",
    DataClipUpdated: "data-clip:updated",
    DataClipDeleted: "data-clip:deleted",
    DataClipCollaboratorUpdated: "data-clip:collaborator-updated",
    DataClipResolutionsCreated: "data-clip:resolutions-created",
    DataClipResolutionsUpdated: "data-clip:resolutions-updated",
    DataClipResolutionsRefreshed: "data-clip:resolutions-refreshed",
} as const;

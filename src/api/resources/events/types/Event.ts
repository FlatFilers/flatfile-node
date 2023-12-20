/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * An event that tracks an activity within an environment
 *
 * @example
 *     {
 *         topic: "workbook:updated",
 *         id: "us_evt_YOUR_ID",
 *         createdAt: new Date("2023-11-07T20:46:04.300Z"),
 *         payload: {
 *             "recordsAdded": 100
 *         },
 *         domain: Flatfile.Domain.Workbook,
 *         context: {
 *             accountId: "us_acc_YOUR_ID",
 *             actorId: "us_key_SOME_KEY",
 *             environmentId: "us_env_YOUR_ID",
 *             spaceId: "us_sp_YOUR_ID",
 *             workbookId: "us_wb_YOUR_ID"
 *         },
 *         callbackUrl: "",
 *         dataUrl: "",
 *         namespaces: ["workbook"],
 *         origin: {
 *             id: "us_wb_YOUR_ID"
 *         }
 *     }
 */
export type Event =
    | Flatfile.Event.AgentCreated
    | Flatfile.Event.AgentUpdated
    | Flatfile.Event.AgentDeleted
    | Flatfile.Event.SpaceCreated
    | Flatfile.Event.SpaceUpdated
    | Flatfile.Event.SpaceDeleted
    | Flatfile.Event.SpaceArchived
    | Flatfile.Event.SpaceExpired
    | Flatfile.Event.DocumentCreated
    | Flatfile.Event.DocumentUpdated
    | Flatfile.Event.DocumentDeleted
    | Flatfile.Event.WorkbookCreated
    | Flatfile.Event.WorkbookUpdated
    | Flatfile.Event.WorkbookDeleted
    | Flatfile.Event.WorkbookExpired
    | Flatfile.Event.SheetCreated
    | Flatfile.Event.SheetUpdated
    | Flatfile.Event.SheetDeleted
    | Flatfile.Event.SnapshotCreated
    | Flatfile.Event.RecordsCreated
    | Flatfile.Event.RecordsUpdated
    | Flatfile.Event.RecordsDeleted
    | Flatfile.Event.FileCreated
    | Flatfile.Event.FileUpdated
    | Flatfile.Event.FileDeleted
    | Flatfile.Event.FileExpired
    | Flatfile.Event.JobCreated
    | Flatfile.Event.JobUpdated
    | Flatfile.Event.JobDeleted
    | Flatfile.Event.JobFailed
    | Flatfile.Event.JobCompleted
    | Flatfile.Event.JobReady
    | Flatfile.Event.JobScheduled
    | Flatfile.Event.JobOutcomeAcknowledged
    | Flatfile.Event.JobPartsCompleted
    | Flatfile.Event.ProgramCreated
    | Flatfile.Event.ProgramUpdated
    | Flatfile.Event.CommitCreated
    | Flatfile.Event.CommitUpdated
    | Flatfile.Event.CommitCompleted
    | Flatfile.Event.SecretCreated
    | Flatfile.Event.SecretUpdated
    | Flatfile.Event.SecretDeleted
    | Flatfile.Event.LayerCreated;

export declare namespace Event {
    interface AgentCreated extends Flatfile.GenericEvent {
        topic: "agent:created";
    }

    interface AgentUpdated extends Flatfile.GenericEvent {
        topic: "agent:updated";
    }

    interface AgentDeleted extends Flatfile.GenericEvent {
        topic: "agent:deleted";
    }

    interface SpaceCreated extends Flatfile.GenericEvent {
        topic: "space:created";
    }

    interface SpaceUpdated extends Flatfile.GenericEvent {
        topic: "space:updated";
    }

    interface SpaceDeleted extends Flatfile.GenericEvent {
        topic: "space:deleted";
    }

    interface SpaceArchived extends Flatfile.GenericEvent {
        topic: "space:archived";
    }

    interface SpaceExpired extends Flatfile.GenericEvent {
        topic: "space:expired";
    }

    interface DocumentCreated extends Flatfile.GenericEvent {
        topic: "document:created";
    }

    interface DocumentUpdated extends Flatfile.GenericEvent {
        topic: "document:updated";
    }

    interface DocumentDeleted extends Flatfile.GenericEvent {
        topic: "document:deleted";
    }

    interface WorkbookCreated extends Flatfile.GenericEvent {
        topic: "workbook:created";
    }

    interface WorkbookUpdated extends Flatfile.GenericEvent {
        topic: "workbook:updated";
    }

    interface WorkbookDeleted extends Flatfile.GenericEvent {
        topic: "workbook:deleted";
    }

    interface WorkbookExpired extends Flatfile.GenericEvent {
        topic: "workbook:expired";
    }

    interface SheetCreated extends Flatfile.GenericEvent {
        topic: "sheet:created";
    }

    interface SheetUpdated extends Flatfile.GenericEvent {
        topic: "sheet:updated";
    }

    interface SheetDeleted extends Flatfile.GenericEvent {
        topic: "sheet:deleted";
    }

    interface SnapshotCreated extends Flatfile.GenericEvent {
        topic: "snapshot:created";
    }

    interface RecordsCreated extends Flatfile.GenericEvent {
        topic: "records:created";
    }

    interface RecordsUpdated extends Flatfile.GenericEvent {
        topic: "records:updated";
    }

    interface RecordsDeleted extends Flatfile.GenericEvent {
        topic: "records:deleted";
    }

    interface FileCreated extends Flatfile.GenericEvent {
        topic: "file:created";
    }

    interface FileUpdated extends Flatfile.GenericEvent {
        topic: "file:updated";
    }

    interface FileDeleted extends Flatfile.GenericEvent {
        topic: "file:deleted";
    }

    interface FileExpired extends Flatfile.GenericEvent {
        topic: "file:expired";
    }

    interface JobCreated extends Flatfile.GenericEvent {
        topic: "job:created";
    }

    interface JobUpdated extends Flatfile.GenericEvent {
        topic: "job:updated";
    }

    interface JobDeleted extends Flatfile.GenericEvent {
        topic: "job:deleted";
    }

    interface JobFailed extends Flatfile.GenericEvent {
        topic: "job:failed";
    }

    interface JobCompleted extends Flatfile.GenericEvent {
        topic: "job:completed";
    }

    interface JobReady extends Flatfile.GenericEvent {
        topic: "job:ready";
    }

    interface JobScheduled extends Flatfile.GenericEvent {
        topic: "job:scheduled";
    }

    interface JobOutcomeAcknowledged extends Flatfile.GenericEvent {
        topic: "job:outcome-acknowledged";
    }

    interface JobPartsCompleted extends Flatfile.GenericEvent {
        topic: "job:parts-completed";
    }

    interface ProgramCreated extends Flatfile.GenericEvent {
        topic: "program:created";
    }

    interface ProgramUpdated extends Flatfile.GenericEvent {
        topic: "program:updated";
    }

    interface CommitCreated extends Flatfile.GenericEvent {
        topic: "commit:created";
    }

    interface CommitUpdated extends Flatfile.GenericEvent {
        topic: "commit:updated";
    }

    interface CommitCompleted extends Flatfile.GenericEvent {
        topic: "commit:completed";
    }

    interface SecretCreated extends Flatfile.GenericEvent {
        topic: "secret:created";
    }

    interface SecretUpdated extends Flatfile.GenericEvent {
        topic: "secret:updated";
    }

    interface SecretDeleted extends Flatfile.GenericEvent {
        topic: "secret:deleted";
    }

    interface LayerCreated extends Flatfile.GenericEvent {
        topic: "layer:created";
    }
}

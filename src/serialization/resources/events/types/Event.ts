/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Event: core.serialization.Schema<serializers.Event.Raw, Flatfile.Event> = core.serialization
    .union("topic", {
        "agent:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "agent:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "agent:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "space:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "document:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "document:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "document:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "workbook:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "sheet:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "sheet:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "sheet:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "snapshot:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "records:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "records:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "records:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "file:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:deleted": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:failed": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:completed": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:ready": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:scheduled": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "job:outcome-acknowledged": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "commit:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "commit:updated": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
        "layer:created": core.serialization.lazyObject(async () => (await import("../../..")).GenericEvent),
    })
    .transform<Flatfile.Event>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Event {
    type Raw =
        | Event.AgentCreated
        | Event.AgentUpdated
        | Event.AgentDeleted
        | Event.SpaceCreated
        | Event.SpaceUpdated
        | Event.SpaceDeleted
        | Event.DocumentCreated
        | Event.DocumentUpdated
        | Event.DocumentDeleted
        | Event.WorkbookCreated
        | Event.WorkbookUpdated
        | Event.WorkbookDeleted
        | Event.SheetCreated
        | Event.SheetUpdated
        | Event.SheetDeleted
        | Event.SnapshotCreated
        | Event.RecordsCreated
        | Event.RecordsUpdated
        | Event.RecordsDeleted
        | Event.FileCreated
        | Event.FileUpdated
        | Event.FileDeleted
        | Event.JobCreated
        | Event.JobUpdated
        | Event.JobDeleted
        | Event.JobFailed
        | Event.JobCompleted
        | Event.JobReady
        | Event.JobScheduled
        | Event.JobOutcomeAcknowledged
        | Event.CommitCreated
        | Event.CommitUpdated
        | Event.LayerCreated;

    interface AgentCreated extends serializers.GenericEvent.Raw {
        topic: "agent:created";
    }

    interface AgentUpdated extends serializers.GenericEvent.Raw {
        topic: "agent:updated";
    }

    interface AgentDeleted extends serializers.GenericEvent.Raw {
        topic: "agent:deleted";
    }

    interface SpaceCreated extends serializers.GenericEvent.Raw {
        topic: "space:created";
    }

    interface SpaceUpdated extends serializers.GenericEvent.Raw {
        topic: "space:updated";
    }

    interface SpaceDeleted extends serializers.GenericEvent.Raw {
        topic: "space:deleted";
    }

    interface DocumentCreated extends serializers.GenericEvent.Raw {
        topic: "document:created";
    }

    interface DocumentUpdated extends serializers.GenericEvent.Raw {
        topic: "document:updated";
    }

    interface DocumentDeleted extends serializers.GenericEvent.Raw {
        topic: "document:deleted";
    }

    interface WorkbookCreated extends serializers.GenericEvent.Raw {
        topic: "workbook:created";
    }

    interface WorkbookUpdated extends serializers.GenericEvent.Raw {
        topic: "workbook:updated";
    }

    interface WorkbookDeleted extends serializers.GenericEvent.Raw {
        topic: "workbook:deleted";
    }

    interface SheetCreated extends serializers.GenericEvent.Raw {
        topic: "sheet:created";
    }

    interface SheetUpdated extends serializers.GenericEvent.Raw {
        topic: "sheet:updated";
    }

    interface SheetDeleted extends serializers.GenericEvent.Raw {
        topic: "sheet:deleted";
    }

    interface SnapshotCreated extends serializers.GenericEvent.Raw {
        topic: "snapshot:created";
    }

    interface RecordsCreated extends serializers.GenericEvent.Raw {
        topic: "records:created";
    }

    interface RecordsUpdated extends serializers.GenericEvent.Raw {
        topic: "records:updated";
    }

    interface RecordsDeleted extends serializers.GenericEvent.Raw {
        topic: "records:deleted";
    }

    interface FileCreated extends serializers.GenericEvent.Raw {
        topic: "file:created";
    }

    interface FileUpdated extends serializers.GenericEvent.Raw {
        topic: "file:updated";
    }

    interface FileDeleted extends serializers.GenericEvent.Raw {
        topic: "file:deleted";
    }

    interface JobCreated extends serializers.GenericEvent.Raw {
        topic: "job:created";
    }

    interface JobUpdated extends serializers.GenericEvent.Raw {
        topic: "job:updated";
    }

    interface JobDeleted extends serializers.GenericEvent.Raw {
        topic: "job:deleted";
    }

    interface JobFailed extends serializers.GenericEvent.Raw {
        topic: "job:failed";
    }

    interface JobCompleted extends serializers.GenericEvent.Raw {
        topic: "job:completed";
    }

    interface JobReady extends serializers.GenericEvent.Raw {
        topic: "job:ready";
    }

    interface JobScheduled extends serializers.GenericEvent.Raw {
        topic: "job:scheduled";
    }

    interface JobOutcomeAcknowledged extends serializers.GenericEvent.Raw {
        topic: "job:outcome-acknowledged";
    }

    interface CommitCreated extends serializers.GenericEvent.Raw {
        topic: "commit:created";
    }

    interface CommitUpdated extends serializers.GenericEvent.Raw {
        topic: "commit:updated";
    }

    interface LayerCreated extends serializers.GenericEvent.Raw {
        topic: "layer:created";
    }
}

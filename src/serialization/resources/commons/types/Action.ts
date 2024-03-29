/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";
import { ActionMode } from "./ActionMode";
import { ActionMessage } from "./ActionMessage";
import { ActionSchedule } from "./ActionSchedule";
import { InputForm } from "./InputForm";
import { ActionConstraint } from "./ActionConstraint";

export const Action: core.serialization.ObjectSchema<serializers.Action.Raw, Flatfile.Action> =
    core.serialization.object({
        slug: core.serialization.string().optional(),
        operation: core.serialization.string().optional(),
        mode: ActionMode.optional(),
        label: core.serialization.string(),
        tooltip: core.serialization.string().optional(),
        messages: core.serialization.list(ActionMessage).optional(),
        type: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        schedule: ActionSchedule.optional(),
        primary: core.serialization.boolean().optional(),
        confirm: core.serialization.boolean().optional(),
        icon: core.serialization.string().optional(),
        requireAllValid: core.serialization.boolean().optional(),
        requireSelection: core.serialization.boolean().optional(),
        inputForm: InputForm.optional(),
        constraints: core.serialization.list(ActionConstraint).optional(),
    });

export declare namespace Action {
    interface Raw {
        slug?: string | null;
        operation?: string | null;
        mode?: ActionMode.Raw | null;
        label: string;
        tooltip?: string | null;
        messages?: ActionMessage.Raw[] | null;
        type?: string | null;
        description?: string | null;
        schedule?: ActionSchedule.Raw | null;
        primary?: boolean | null;
        confirm?: boolean | null;
        icon?: string | null;
        requireAllValid?: boolean | null;
        requireSelection?: boolean | null;
        inputForm?: InputForm.Raw | null;
        constraints?: ActionConstraint.Raw[] | null;
    }
}

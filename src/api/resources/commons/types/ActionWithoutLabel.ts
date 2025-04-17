/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

export interface ActionWithoutLabel {
    /** **This is deprecated. Use `operation` instead.** */
    slug?: string;
    /** This will become the job operation that is triggered */
    operation?: string;
    /** Foreground and toolbarBlocking action mode will prevent interacting with the resource until complete */
    mode?: Flatfile.ActionMode;
    /** A tooltip that appears when hovering the action button */
    tooltip?: string;
    messages?: Flatfile.ActionMessage[];
    /** **This is deprecated.** */
    type?: string;
    /** The text that appears in the dialog after the action is clicked. */
    description?: string;
    /** Determines if the action should happen on a regular cadence. */
    schedule?: Flatfile.ActionSchedule;
    /** A primary action will be more visibly present, whether in Sheet or Workbook. */
    primary?: boolean;
    /** Whether to show a modal to confirm the action */
    confirm?: boolean;
    /** Icon will work on primary actions. It will only accept an already existing Flatfile design system icon. */
    icon?: string;
    /** **This is deprecated. Use `constraints` instead.** */
    requireAllValid?: boolean;
    /** **This is deprecated. Use `constraints` instead.** */
    requireSelection?: boolean;
    /** Adds an input form for this action after it is clicked. */
    inputForm?: Flatfile.InputForm;
    /** A limitation or restriction on the action. */
    constraints?: Flatfile.ActionConstraint[];
    mount?: Flatfile.ActionMount;
    guide?: Flatfile.Guide;
    guardrail?: Flatfile.Guardrail;
}

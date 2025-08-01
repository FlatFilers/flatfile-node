/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../index";

/**
 * The options for a templated agent.
 */
export type TemplateOptions =
    | Flatfile.TemplateOptions.Constraints
    | Flatfile.TemplateOptions.Autobuild
    | Flatfile.TemplateOptions.Autocast
    | Flatfile.TemplateOptions.WebhookEgress
    | Flatfile.TemplateOptions.ActionListener
    | Flatfile.TemplateOptions.Automap;

export namespace TemplateOptions {
    export interface Constraints extends Flatfile.ConstraintsTemplateOptions {
        template: "constraints";
    }

    export interface Autobuild extends Flatfile.AutobuildTemplateOptions {
        template: "autobuild";
    }

    export interface Autocast extends Flatfile.AutocastTemplateOptions {
        template: "autocast";
    }

    export interface WebhookEgress extends Flatfile.WebhookEgressTemplateOptions {
        template: "webhook-egress";
    }

    export interface ActionListener extends Flatfile.ActionListenerTemplateOptions {
        template: "action-listener";
    }

    export interface Automap extends Flatfile.AutomapTemplateOptions {
        template: "automap";
    }
}

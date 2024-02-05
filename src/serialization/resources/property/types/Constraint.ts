/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const Constraint: core.serialization.Schema<serializers.Constraint.Raw, Flatfile.Constraint> = core.serialization
    .union("type", {
        required: core.serialization.object({}),
        unique: core.serialization.lazyObject(async () => (await import("../../..")).UniqueConstraint),
        computed: core.serialization.object({}),
        external: core.serialization.lazyObject(async () => (await import("../../..")).ExternalConstraint),
    })
    .transform<Flatfile.Constraint>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Constraint {
    type Raw = Constraint.Required | Constraint.Unique | Constraint.Computed | Constraint.External;

    interface Required {
        type: "required";
    }

    interface Unique extends serializers.UniqueConstraint.Raw {
        type: "unique";
    }

    interface Computed {
        type: "computed";
    }

    interface External extends serializers.ExternalConstraint.Raw {
        type: "external";
    }
}

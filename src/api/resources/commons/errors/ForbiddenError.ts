/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as Flatfile from "../../..";

export class ForbiddenError extends errors.FlatfileError {
    constructor(body: Flatfile.Errors) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}

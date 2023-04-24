/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { Flatfile } from "@flatfile/api";

export class NotFoundError extends errors.FlatfileError {
    constructor(body: Flatfile.Error_[]) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

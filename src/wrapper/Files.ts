import { Files as FernFiles } from "../api/resources/files/client/Client";
import * as Flatfile from "../api";
import axios from "axios";
import urlJoin from "url-join";
import * as environments from "../environments";
import * as serializers from "../serialization";
import * as errors from "../errors";

export class Files extends FernFiles {
    public async download(fileId: Flatfile.FileId): Promise<ArrayBuffer> {
        const authHeader = await this._getAuthorizationHeader();

        const response = await axios({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/files/${await serializers.FileId.jsonOrThrow(fileId)}/download`
            ),
            method: "GET",
            headers: authHeader != null ? { Authorization: authHeader } : undefined,
            validateStatus: () => true,
            responseType: "arraybuffer",
            timeout: 60_000,
        });

        if (response.status >= 300) {
            throw new errors.FlatfileError({
                statusCode: response.status,
            });
        }

        return response.data;
    }
}

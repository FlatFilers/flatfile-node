import { Records as FernRecords } from "../api/resources/records/client/Client";
import { Flatfile } from "..";
import * as environments from "../environments";
import * as core from "../core";
import * as serializers from "../serialization";
import urlJoin from "url-join";
import * as errors from "../errors";

export class Records extends FernRecords {
    /**
     * Adds records to a workbook sheet
     * @throws {@link Flatfile.BadRequestError}
     * @throws {@link Flatfile.NotFoundError}
     */
    public async insert(
        sheetId: Flatfile.SheetId,
        request: Flatfile.RecordData[],
        requestOptions?: FernRecords.RequestOptions
    ): Promise<Flatfile.RecordsResponse> {
        /* add your own implementation of addRecords */
        throw new Error("Unimplemnted");
    }
}

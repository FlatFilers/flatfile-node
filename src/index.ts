import { FlatfileClient } from "./wrapper/FlatfileClient";

export * as Flatfile from "./api";
export { FlatfileClient } from "./wrapper/FlatfileClient";
export { FlatfileEnvironment } from "./environments";
export { FlatfileError, FlatfileTimeoutError } from "./errors";

// V2 API exports
export * as FlatfileV2 from "./api/resources/v2";
export { FlatfileV2Client } from "./Client-v2";
export { FlatfileV2Environment } from "./environments-v2";
export { FlatfileV2Error, FlatfileV2TimeoutError } from "./errors-v2";

export default new FlatfileClient();

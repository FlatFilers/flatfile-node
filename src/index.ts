import { FlatfileClient } from "./wrapper/FlatfileClient";

export * as Flatfile from "./api";
export { FlatfileClient } from "./wrapper/FlatfileClient";
export { FlatfileEnvironment } from "./environments";
export { FlatfileError, FlatfileTimeoutError } from "./errors";

export default new FlatfileClient()

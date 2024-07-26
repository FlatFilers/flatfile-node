import { FlatfileClient } from "../src/index";

describe("FlatfileClient", () => {
  it("is instantiatable as a class", () => {
    const client = new FlatfileClient();

    expect(client).toBeInstanceOf(FlatfileClient);
  });
});

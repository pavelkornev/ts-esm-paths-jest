import { abc } from "src/moduleA.js";

describe("project tests", () => {
  test("moduleA is correct", async () => {
    expect(abc).toEqual("123");
  });
});

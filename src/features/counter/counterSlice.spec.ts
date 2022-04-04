import counterReducer from "./counterSlice";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      pageValue: 1,
      subpageValue: 1,
    });
  });
});

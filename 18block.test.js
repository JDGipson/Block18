const calc = require("./block18.js");

describe("calc test:", () => {
  test("multiply(3 , 6): multiplying 3 * 6 should return 18", () => {
    expect(calc.multi(3, 6)).toBe(18);
  });
});

describe("calc test:", () => {
  test("concatOdds Test([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]): Should return [-1, 1, 3, 9, 15]", () => {
    expect(calc.odds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toBeCloseTo([
      -1, 1, 1, 1, 1, 3, 9, 15,
    ]);
  });
});

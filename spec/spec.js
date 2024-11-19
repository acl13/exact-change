import dispenseDollars from "../dispenseDollars.js";
import dispenseCents from "../dispenseCents.js";

describe("dispenseDollars", function () {
  it("calculates the change for bills", function () {
    expect(dispenseDollars(169)).toEqual({
      amount: 0,
      hundreds: 1,
      fifties: 1,
      twenties: 0,
      tens: 1,
      fives: 1,
      ones: 4,
    });
  });
});

describe("dispenseCents", function () {
  it("calculates the change for coins", function () {
    expect(dispenseCents(67)).toEqual({
      amount: 0,
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 2,
    });
  });
});

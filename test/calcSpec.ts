import assert = require("assert");
import Calc from "../src/lib/calc";
describe("MyLib", () => {
  let calc: Calc;
  beforeEach(() => {
    calc = new Calc();
  });
  it("should add two numbers", () => {
    assert.equal(calc.add(2, 2), 4);
  });
  it("should subtract two number", () => {
    assert.equal(calc.sub(2, 2), 0);
  });
  it("should return product of two numbers", () => {
    assert.equal(calc.multiply(2, 2), 4);
  });
  it("should divide two number", () => {
    assert.equal(calc.divide(2, 2), 1);
  });
});

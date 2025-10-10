// import * as calc from "../models/calc.js";
const calc = require("../../models/calculadora.js");

test("soma 5 + 100 para ser igual a 105", () => {
  console.log(calc.somar(5, 100));
  expect(calc.somar(5, 100)).toBe(105);
});

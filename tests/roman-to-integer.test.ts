import  romanToInt  from "../src/roman-to-integer";
import { expect, test } from "@jest/globals";

test(`IV should equal 4.`, () => {
  expect(romanToInt("IV")).toEqual(4);
});


test(`LVIII should equal 58.`, () => {
  expect(romanToInt("LVIII")).toEqual(58);
});

test(`MCMXCIV should equal 1994.`, () => {
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});





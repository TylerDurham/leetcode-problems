import romanToInt from "../src/roman-to-integer";
import { expect, test } from "@jest/globals";

test(`IV should equal 4.`, () => {
  expect(romanToInt("IV")).toEqual(4);
});

test(`IX should equal 9.`, () => {
  expect(romanToInt("IX")).toEqual(9);
});

test(`XIV should equal 14.`, () => {
  expect(romanToInt("XIV")).toEqual(14);
});

test(`XXIV should equal 24.`, () => {
  expect(romanToInt("XXIV")).toEqual(24);
});

test(`LVIII should equal 58.`, () => {
  expect(romanToInt("LVIII")).toEqual(58);
});


test(`LIX should equal 59.`, () => {
  expect(romanToInt("LIX")).toEqual(59);
});

test(`MCMXCIV should equal 1994.`, () => {
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});

// THIS WILL FAIL - romanToInt only goes to 3,999
test(`CDIXCCIX should equal 409209.`, () => {
  expect(romanToInt("CDIXCCIX")).toEqual(409209);
});




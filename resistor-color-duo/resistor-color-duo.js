//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
"use strict";
var twoDigitNumber;
export const decodedValue = (nameColor) => {
  let firstDigitNumber;
  let secondDigitNumber;
  let nameColorOne;
  let nameColorTwo;

  nameColorOne = String(nameColor[0]).toLowerCase();
  nameColorTwo = String(nameColor[1]).toLowerCase();

  if (COLORS.includes(nameColorOne, 0) && COLORS.includes(nameColorTwo, 0)) {
    firstDigitNumber = COLORS.indexOf(nameColorOne);

    secondDigitNumber = COLORS.indexOf(nameColorTwo);

    twoDigitNumber = String(firstDigitNumber) + String(secondDigitNumber);

    return Number(twoDigitNumber);
  }
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
"use strict";
var twoDigitNumber;
export const decodedValue = (nameColor) => {
  let result;
  console.log(nameColor[0], nameColor[1]);

  result = takeIndex(nameColor);

  return result.join("");
};
function takeIndex(twoColors) {
  let nameColorOne;
  let nameColorTwo;
  let firstDigitNumber;
  let secondDigitNumber;

  nameColorOne = String(twoColors[0]).toLowerCase();
  nameColorTwo = String(twoColors[1]).toLowerCase();

  if (COLORS.includes(nameColorOne, 0) && COLORS.includes(nameColorTwo, 0)) {
    firstDigitNumber = COLORS.indexOf(nameColorOne);

    secondDigitNumber = COLORS.indexOf(nameColorTwo);
  }

  return [firstDigitNumber, secondDigitNumber];
}
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

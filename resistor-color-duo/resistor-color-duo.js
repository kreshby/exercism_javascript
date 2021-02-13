//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//"use strict";

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
let twoColors;

export const decodedValue = (twoColors) =>
  Number(
    twoColors.map((element) => COLORS.indexOf(element.toLowerCase())).join("")
  );

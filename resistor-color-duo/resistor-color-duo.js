//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (nameColor1, nameColor2) => {
  //throw new Error('Remove this statement and implement this function');
  let twoDigitNumber;
  let firstDigitNumber;
  let secondDigitNumber;
  if (0 <= nameColor1 && nameColor1 <= 9) {
    let firstDigitNumber = COLORS.indexOf(nameColor1);
  }
  if (0 <= nameColor2 && nameColor2 <= 9) {
    let secondDigitNumber = COLORS.indexOf(nameColor2);
  }

  twoDigitNumber = firstDigitNumber + secondDigitNumber;

  return twoDigitNumber;
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

//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  let massage;

  if (typeof name === "string" && name.trim()) {
    massage = `One for ${name.trim()}, one for me.`;
  } else {
    massage = "One for you, one for me.";
  }
  return massage;
};

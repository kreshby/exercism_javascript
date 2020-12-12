//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name = 'you') => {
  let massage;

  if (typeof name === "string" && name.trim()) {
    massage = `One for ${name}, one for me.`;
  } 
  return massage;
};

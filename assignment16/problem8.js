"use strict";
const isValidHexCode = (hexCode) => {
  let regex = /^#[0-9A-Fa-f]{6}$/;
  return regex.test(hexCode);
};

console.log(isValidHexCode("#CD5C5C"));
console.log(isValidHexCode("#EAECEE"));
console.log(isValidHexCode("#CD5C&C"));

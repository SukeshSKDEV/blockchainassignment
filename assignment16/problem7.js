"use strict";
const validatePIN = (pin) => {
  let regex = /^[0-9]{4}$|^[0-9]{6}$/;
  return regex.test(pin);
};

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));

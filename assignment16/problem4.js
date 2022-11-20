"use strict";
const num_of_digits = (num) => {
  let numStr = num.toString();
  let regex = /\d/g; // \d->regex used to check the digit
  return numStr.match(regex).length;
};
console.log(num_of_digits(1000));
console.log(num_of_digits(1305981031));

"use strict";
const doubleLetter = (str) => {
  let regex = /([A-Za-z])\1/; // /1 ->backreferencing the same character or word
  return regex.test(str);
};
console.log(doubleLetter("loop"));
console.log(doubleLetter("yummy"));

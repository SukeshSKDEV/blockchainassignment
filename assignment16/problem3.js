"use strict";
const primeNo = (primeStr) => {
  let numUnary = "1".repeat(Number(primeStr)); // convert any number to its unary form ex. 5="11111"
  let regex = /^1?$|^(11+?)\1+$/; // regex to check even number
  return !regex.test(numUnary); // !=true->prime !=false->even
};
console.log(primeNo("7")); // 7=1111111 regex=11 11 /111 111 / 1111 1111 ->no match not divsible =>prime number
console.log(primeNo("134"));

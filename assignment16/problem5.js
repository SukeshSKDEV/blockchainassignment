"use strict";
const removeLeadingTrailing = (num) => {
  let regexZero = /^0+.0+$/; // regular expression for 0,0.0,0.00,00.00,0.00000=>0
  let numLeading;
  let regexLeading;
  let regexTrailing;
  let numTrailing;
  if (regexZero.test(num)) {
    numLeading = num.replace(regexZero, "0");
  } else {
    regexLeading = /^0+/; // regular expression for 01,006,00007,000008=>1,6,7,8
    regexTrailing = /.0+$/; // // regular expression for 01.0,02.00=>1,2
    numTrailing = num.replace(regexTrailing, "");
    numLeading = numTrailing.replace(regexLeading, "");
  }
  return numLeading;
};
console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00000402"));
console.log(removeLeadingTrailing("4.0"));
console.log(removeLeadingTrailing("00.00"));
console.log(removeLeadingTrailing("0.0"));
console.log(removeLeadingTrailing("000"));
console.log(removeLeadingTrailing("00.00"));
console.log(removeLeadingTrailing("0"));

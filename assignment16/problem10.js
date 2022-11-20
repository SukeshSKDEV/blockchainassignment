"use strict";
const XO = (str) => {
  let regex_x = /x/gi;
  let regex_o = /o/gi;

  if (
    !(regex_x.test(str) && regex_o.test(str)) ||
    str.match(regex_o).length === str.match(regex_x).length
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));

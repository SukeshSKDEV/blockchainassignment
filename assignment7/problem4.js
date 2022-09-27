let S = "apple";
let regex = /a/g;

const replaceChar = function (str) {
  return str.replace(regex, "x");
};
console.log(replaceChar(S));

let S = "Hii Boy";
const wordReverse = function (inputStr) {
  const reverseStr = inputStr.split(" ").reverse().join(" ");
  return reverseStr;
};
console.log(wordReverse(S));

// Split method is used to convert string into array

const inputStr = "How are you my friend ?";
const arrToStr = function (str) {
  const outputStr = str.split(" ");
  return outputStr;
};
console.log(arrToStr(inputStr));

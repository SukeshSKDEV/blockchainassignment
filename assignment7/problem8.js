let inputStr = "hi i am sukesh";
const firstCharLower = function (str) {
  let regex = /^[a-z]/;
  if (regex.test(str)) {
    console.log("The first character of the string is lowercase.");
  } else {
    console.log("The first character of the string is not lowercase.");
  }
};
firstCharLower(inputStr);

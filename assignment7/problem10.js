//  Convert the String into upper case
let S = "Sukesh Rupesh";
let allUpper = S.toUpperCase();
console.log(allUpper);

// Convert only the first character to uppercase
let firstUpper = `${S[0].toUpperCase()}${S.slice(1).toLowerCase()}`;
console.log(firstUpper);

// Convert the String into lower case
let allLower = S.toLowerCase();
console.log(allLower);

//Break the string into two halves and swap them
const halfStr = `${S.slice(S.length / 2 + 1, S.length)} ${S.slice(
  0,
  S.length / 2
)}`;
console.log(halfStr);

// Count the repeating characters
let inputStr = "Hey there I am here";
const charCount = function (str) {
  let sentStr = str.split(" ").join("");
  let charRepeat = {};
  let ch = [];
  let repeatChar = {};
  for (let i = 0; i < sentStr.length; i++) {
    ch = sentStr[i].toLowerCase();
    if (charRepeat[ch] > 0) {
      charRepeat[ch]++;
    } else {
      charRepeat[ch] = 1;
    }
  }
  for (let [key, value] of Object.entries(charRepeat)) {
    if (value > 1) {
      console.log(`${key}: ${value}`);
    }
  }
};
charCount(inputStr);

//Reverse the string
const revStr = function (str) {
  let ch = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ch += str[i];
  }
  return ch;
};
console.log(revStr(S));

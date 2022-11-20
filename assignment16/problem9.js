"use strict";
const sevenBoom = (arr) => {
  let regex = /\b7\b/g;
  let msg;
  for (let item of arr) {
    if (regex.test(item.toString())) {
      msg = "Boom!";
      return msg;
    } else {
      msg = "there is no 7 in the array";
    }
  }
  return msg;
};
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));

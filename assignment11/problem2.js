"use strict";
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 6, 1, 8, 2];

function checkNumber(array1, array2) {
  if (array1.includes(4) && array2.includes(4)) {
    console.log("4 in both arrays");
  } else if (array1.includes(4)) {
    console.log("4 in array 1");
  } else if (array2.includes(4)) {
    console.log("4 in array 2");
  }
}
checkNumber(arr1, arr2);

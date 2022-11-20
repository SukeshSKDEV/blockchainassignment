// What are the different ways of iterating through an array? demonstrate them.
"use strict";
let arr = ["e", "f", "g", "h", "a", "i", "j"];
// 1. for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 2. for of loop
for (let item of arr) {
  console.log(item);
}
// 3. for in loop
for (let item in arr) {
  console.log(arr[item]);
}
// 4. while loop
let num1 = 0;
while (num1 < arr.length) {
  console.log(arr[num1]);
  num1++;
}

// 5. do while loop
let num2 = 0;
do {
  console.log(arr[num2]);
  num2++;
} while (num2 < arr.length);

// 6. forEach loop
arr.forEach((num) => {
  console.log(num);
});

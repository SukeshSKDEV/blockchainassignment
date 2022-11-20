"use strict";
let oriArr = [1, 2, 3, 4, 5];
let squareArr = oriArr.map((num) => num ** 2); // Squaring of original array
let mapSquareArr = new Map([["squares", squareArr]]); // convert squared array to map with key 'squares'
console.log(mapSquareArr);

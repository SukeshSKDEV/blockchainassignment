let arr = [1, 2, 3, 4, 5];
// a) Sum of all elements in the array using reduce()
let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(`Sum : ${sum}`);
// b) Average of all elements in the array using reduce()
let avg = arr.reduce((acc, cur) => acc + cur / arr.length, 0);
console.log(`Average : ${avg}`);

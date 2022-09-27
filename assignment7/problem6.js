// to check the occurence of a string we can use two methods : 1. includes 2. regex
console.log(str.includes("sukesh"));
// OR
let str = "Hey this is sukesh and I am sukesh.";
let reg = /sukesh/g;
const result = reg.match(str);
console.log(result);
// console.log(result);
// console.log(str.includes("sukesh"));
// console.log(str.search(reg));
// console.log(str.replace(reg, "Nilesh"));

let arr = [1, 2, 3, 2, 3, 4, 5];
let uniqueArray = arr.filter(function (num, index) {
  return arr.indexOf(num) === index;
});
let duplicateArray = arr.filter(function (num, index) {
  return arr.indexOf(num) !== index;
});
console.log(`Duplicate Elements = ${uniqueArray}`);
console.log(`Array without duplicate elements = ${duplicateArray}`);

let arr = [1, 2, [3, 4, [5]]];
let regex = /,/g;
flatArrayStr = arr.join("").replace(regex, "").split("");
console.log(flatArrayStr);
let flatArrayNum = flatArrayStr.map(function (el) {
  return Number(el);
});

console.log(flatArrayNum);

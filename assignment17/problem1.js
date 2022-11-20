const arr = ["John", "Rohn", "Danny", "James"];
const iterateArray = (arr) => {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

let iteration = iterateArray(arr);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);

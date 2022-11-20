const iterator = function (arr) {
  let index = 0; // helps in iterating new element of array
  return {
    next: function () {
      if (index < arr.length) {
        // if iteration is not completed return following object
        return {
          value: arr[index++],
          done: false,
        };
      } else {
        // if iteration is completed return following object
        return {
          done: true,
        };
      }
    },
  };
};

nameArray = ["sunny", "suraj", "suresh", "sunil", "sumit"];
let nameIterator = iterator(nameArray);
// start iteration
console.log(nameIterator.next().value);
console.log(nameIterator.next().value);
console.log(nameIterator.next().value);
console.log(nameIterator.next().value);
console.log(nameIterator.next().value);

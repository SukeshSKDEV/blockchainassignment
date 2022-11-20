const array1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "g", "b", "a", "z", "j"];

const iterator = function (arr1, arr2) {
  let index = 0;
  return {
    next: function () {
      if (index < arr1.length) {
        for (let i = 0; i < arr2.length; i++) {
          // loop over through array2 for each element in array1
          if (arr1[index] === arr2[i]) {
            // if element matches with array2 show the following message
            console.log(`Item Matched '${arr1[index]}' with second array.`);
          }
        }
        return {
          value: arr1[index++],
          done: false,
        };
      } else
        return {
          done: true,
        };
    },
  };
};

let iterVal = iterator(array1, array2);
console.log(iterVal.next());
console.log(iterVal.next());
console.log(iterVal.next());
console.log(iterVal.next());
console.log(iterVal.next());

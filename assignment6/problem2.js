function find_largest(nthLargeNumber) {
  let numbers = [3, 45, 6, 7, 23, 5, 7, 8];
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[numbers.length - nthLargeNumber];
}
console.log(find_largest(3));

const multiplyGenerator = function* (num1, operator, num2) {
  while (true) {
    if (operator === "*") {
      yield num1 * num2;
      return num1 * num2;
    } else {
      return true;
    }
  }
};
console.log(multiplyGenerator(2, "*", 2).next().value);
console.log(multiplyGenerator(3, "+", 3).next().value);

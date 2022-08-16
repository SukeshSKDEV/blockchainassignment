const number = 4; // number used for factorial
let factorial = 1; // reference number which is multiplied by factors

// condition -> 1. factorial cannot be negative 2. 0!=1

if (number > 0) {
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  console.log("The factorial of " + number + "!" + " is " + factorial);
} else if (number === 0) {
  console.log("The factorial of 0 is 1");
} else {
  console.log("Factorial cannot be negative.");
}

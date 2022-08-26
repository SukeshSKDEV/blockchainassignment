// Function to find prime Number between the given range
function primeNo(num1, num2) {
  let prime = [];
  let primeCheck = true;

  for (let i = num1; i <= num2; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primeCheck = false; // if the given number is divisible by any number greater then 1 then it is not a prime number
        break;
      }
    }
    if (i <= 1) {
      // if the number is equal to or less than 1 then it is not a prime number
      primeCheck = false;
    }

    if (primeCheck === true) {
      prime.push(i); // Add all the prime number into an array
    }
    primeCheck = true;
  }
  console.log(`The prime Numbers between ${num1} and ${num2} are : `, prime);

  // Factorial of prime numbers
  primeNoFactorial(prime);
}

// Function to find factorial of prime number
function primeNoFactorial(primenumb) {
  let initFactorial, primeNumber;
  for (let i = 0; i < primenumb.length; i++) {
    initFactorial = 1;
    primeNumber = primenumb[i]; // extract each number in an array

    for (let i = primeNumber; i >= 1; i--) {
      initFactorial = initFactorial * i; // Factorial calculate
    }

    console.log(`Factorial of ${primeNumber}! is ${initFactorial}.`);
    initFactorial = 1;
  }
}

// Execute the program
primeNo(1, 100);

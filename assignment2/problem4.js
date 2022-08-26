function primeNumber(x, y) {
  let i, j;
  for (i = x; i <= y; i++) {
    for (j = 2; j <= i; j++) {
      if (i % j === 0) {
        break;
      }
    }
    if (i === j) {
      factorial(i);
    }
  }
}

function factorial(prime) {
  let factorial = 1;
  for (i = prime; i >= 1; i--) {
    factorial = factorial * i;
  }
  console.log(`${prime}! is ${factorial}`);
}

primeNumber(1, 100);

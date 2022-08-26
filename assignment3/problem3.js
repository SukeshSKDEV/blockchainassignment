function specialNumber(number) {
  numberToString = number.toString(); // convert number to string to select each digit
  let specialNumb = 0;
  let initFactorial = 1;
  for (i = 0; i < numberToString.length; i++) {
    for (j = Number(numberToString[i]); j >= 1; j--) {
      // program to make factorial of each digit number
      initFactorial *= j;
    }
    specialNumb += initFactorial; // sum of the factorial of digits
    initFactorial = 1;
  }
  if (specialNumb === number) {
    // condition for special number
    console.log(`${number} is a Special Number.`);
  } else {
    console.log(`${number} is not a Special Number.`);
  }
}
specialNumber(145);

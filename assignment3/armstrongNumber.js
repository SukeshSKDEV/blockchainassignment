function armstrongNumber(number) {
  numberToString = number.toString(); // convert number to string to select each digit
  let armstrNumber = 0;
  for (i = 0; i < numberToString.length; i++) {
    armstrNumber += Number(numberToString[i]) ** 3; // make cube of each digit and add to the sum
  }
  if (armstrNumber === number) {
    console.log(`${number} is a Armstrong Number.`);
  } else {
    console.log(`${number} is not a Armstrong Number.`);
  }
}
armstrongNumber(371);

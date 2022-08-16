let year = 1500;
const leapYear = function (givenYear) {
  if (givenYear % 100 === 0) {
    // if the number is divisible by 100 and at the same time divisible by 400 -> leap year
    if (givenYear % 400 === 0) {
      return "The given year is a leap year";
    } else {
      return "The given year is not a leap year";
    }
  } else if (givenYear % 4 === 0) {
    // if the number is not divisible by 100 but divisible by 4 -> leap year
    return "The given year is a leap year";
  } else {
    return "The given year is not a leap year";
  }
};

console.log(leapYear(year));

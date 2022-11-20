// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
// you 6.25 + 2 + .25 + 0 = 8.50.
// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// Notes
// ● quarter: 25 cents / $0.25
// ● dime: 10 cents / $0.10
// ● nickel: 5 cents / $0.05
// ● penny: 1 cent / $0.01

const changeEnough = (arr, due) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result += arr[0] * 0.25;
    } else if (i === 1) {
      result += +arr[1] * 0.1;
    } else if (i === 2) {
      result += arr[2] * 0.05;
    } else {
      result += arr[3] * 0.01;
    }
  }
  if (result >= due) console.log(true);
  else console.log(false);
};
changeEnough([25, 20, 5, 0], 4.25);
changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);
changeEnough([30, 40, 20, 5], 12.55);

let userInput = [1, 2, 3, 4, 5];

let oddArray = userInput.filter(function (num, index) {
  if ((index + 1) % 2 !== 0) {
    return num;
  }
});

let oddArraySum = oddArray.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

let evenArray = userInput.filter(function (num, index) {
  if ((index + 1) % 2 === 0) {
    return num;
  }
});
let evenArraySum = evenArray.reduce((acc, curr) => acc + curr, 0);

console.log(`Difference = ${oddArraySum - evenArraySum} `);
console.log(`Odd elements = ${oddArray.length} `);
console.log(`Even elements = ${evenArray.length} `);
console.log(`Average = ${(oddArraySum + evenArraySum) / userInput.length} `);

function gcd(num1, num2) {
  for (let i = 2; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      console.log(`The GCD of ${num1} and ${num2} is ${i}`);
    }
  }
}
gcd(oddArraySum, evenArraySum);

// sum of multiple of 3 and 5 = sum of multiple of 3 + sum of multiple of 5 - sum of multiple of 3 and 5
function multiplof3() {
  let multiplof3 = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      multiplof3 += i;
    }
  }
  return multiplof3;
}

function multiplof5() {
  let multiplof5 = 0;
  for (let j = 0; j < 1000; j++) {
    if (j % 5 === 0) {
      multiplof5 += j;
    }
  }
  return multiplof5;
}

function multipleof5and3() {
  let multipleof5and3 = 0;
  for (let k = 0; k < 1000; k++) {
    if (k % 3 === 0 && k % 5 === 0) {
      multipleof5and3 += k;
    }
  }
  return multipleof5and3;
}
let total = multiplof3() + multiplof5() - multipleof5and3();
console.log("The sum of multiple of 3 and 5 under 1000 is : ", total);
console.log("The sum of the multiple of 3", multiplof3());
console.log("The sum of the multiple of 7", multiplof5());

const rightShiftOperator = (num, pow) => {
  if (pow <= 0) return num;
  else {
    num = Math.floor(num / 2);
    pow--;
    return rightShiftOperator(num, pow);
  }
};
console.log(rightShiftOperator(64, 3)); // 64 << 2^3 = 64/8 = 8

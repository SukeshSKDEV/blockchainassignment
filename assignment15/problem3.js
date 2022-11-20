const secondDerivativeFunc = (b, m) => {
  const secondDerivative = b * (b - 1) * m ** (b - 2); // second derive of f(x)=x^b +x* (e^(b*m))
  return secondDerivative;
};
console.log(secondDerivativeFunc(3, 2));

const fahrenheitToCelcius = function (tempinFahrenheit) {
  const celcius = (5 * (tempinFahrenheit - 32)) / 9;
  return celcius + " °C";
};
const celciusTofahrenheit = function (tempinCelcius) {
  const fahrenheit = (9 * tempinCelcius + 160) / 5;
  return fahrenheit + " °F";
};

console.log(fahrenheitToCelcius(45));
console.log(celciusTofahrenheit(60));

// Higher Order Function
const transformation = function (str, fn) {
  console.log(`Original string is : ${str}`);
  console.log(`Transformed string is : ${fn(str)}`);
};

// Callback function
const transformedStr = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
transformation("Sukesh, I am the Greatest !", transformedStr);

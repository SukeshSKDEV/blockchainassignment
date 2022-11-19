// 3. Give an example of a Higher Order function and a call back function used in the same program.
// Answer :
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

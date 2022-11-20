"use strict";
const findHappiness = (str) => {
  let regex = /happiness/;
  if (regex.test(str)) {
    return "Hurray!";
  } else {
    return "There is no happiness.";
  }
};
console.log(findHappiness("Work makes me happy"));
console.log(findHappiness("You give me the feeling of happiness"));

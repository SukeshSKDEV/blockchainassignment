const naturalNumGeneraator = function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
  return i;
};

const nauturalNumber = naturalNumGeneraator();
console.log(nauturalNumber.next().value);
console.log(nauturalNumber.next().value);
console.log(nauturalNumber.next().value);
console.log(nauturalNumber.next().value);
console.log(nauturalNumber.next().value);
console.log(nauturalNumber.next().value); // provide infinite number of series of natural numbers

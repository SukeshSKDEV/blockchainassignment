const exceptionThrowGenerator = function* () {
  let i = 0;
  while (true) {
    try {
      yield i++;
    } catch (e) {
      console.log("ERROR !");
    }
  }
};
const exception = exceptionThrowGenerator();
exception.next();
exception.throw(new Error("Something went wrong"));

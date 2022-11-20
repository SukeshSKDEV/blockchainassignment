// 8. Is it possible to nest async functions in JavaScript? Explain with examples.
// Answer : Yes it is possible to nest async Functions in JavaScript.
async function firstFunction() {
  console.log("First function is started.");
  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("First function is done");
    }, 1000);
  });
  let firstPromise = await promise2;
  console.log(firstPromise);
}

async function secondFunction() {
  console.log("Second function is started.");
  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(async () => {
      await firstFunction();
      resolve("Second function is done");
    }, 1000);
  });
  let secondPromise = await promise2;
  console.log(secondPromise);
}
secondFunction()
  .then(() => {
    console.log("Finally, all work is done");
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// 5. Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms.
const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise has been resolved.");
    }, 1000);
  });
};

delay().then((res) => {
  console.log(res);
});
console.log("Asynchronous code.");

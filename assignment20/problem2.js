// 2. Is it possible to use async/await with promise chains? If yes, how can this be achieved?
// Yes. Chaining can be done as follows:
const firstFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = "blue";
      resolve("Resolved First Promise");
    }, 1000);
  });
};
const secondFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
      resolve("Resolved Second Promise");
    }, 1000);
  });
};
const thirdFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = "violet";
      resolve("Resolved Third Promise");
    }, 1000);
  });
};
const fourthFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
      resolve("Resolved Fourth Promise");
    }, 1000);
  });
};

const colorPicker = async () => {
  // Chaining Promises
  await firstFunction();
  await secondFunction();
  await thirdFunction();
  await fourthFunction();
  return "Success";
};
colorPicker().then((data) => {
  console.log(data);
  console.log("END!");
});

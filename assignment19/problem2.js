const sleep = (seco) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Slept for ${seco} seconds.`);
    }, seco * 1000);
  });
};

sleep(1).then((res) => {
  console.log(res);
});
console.log("Asynchronus code.");

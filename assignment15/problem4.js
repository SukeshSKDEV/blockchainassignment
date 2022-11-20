const trinalge = (num) => {
  let result = 0;
  let pattern = 0;
  for (let i = 0; i <= num; i++) {
    pattern = (i * (i + 1)) / 2;
    result = result + pattern;
  }
  console.log(result);
};
trinalge(1);
trinalge(6);

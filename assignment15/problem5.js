const changeEnough = (arr, due) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result += arr[0] * 0.25;
    } else if (i === 1) {
      result += +arr[1] * 0.1;
    } else if (i === 2) {
      result += arr[2] * 0.05;
    } else {
      result += arr[3] * 0.01;
    }
  }
  if (result >= due) console.log(true);
  else console.log(false);
};
changeEnough([25, 20, 5, 0], 4.25);
changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);
changeEnough([30, 40, 20, 5], 12.55);

const nextEdge = (side1, side2) => {
  if (side1 > 0 && side2 > 0) {
    return side1 + side2 - 1;
  } else {
    return "invalid sides of triangle";
  }
};
console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));

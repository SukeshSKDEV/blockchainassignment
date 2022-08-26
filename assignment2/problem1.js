function checkTriangle(side1, side2, side3) {
  if (side1 === side2 && side2 === side3 && side3 === side1) {
    console.log("The given sides are of Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("The given sides are of Isoceles Triangle");
  } else {
    console.log("The given sides are of Scalene Triangle");
  }
}

checkTriangle(12, 16, 18);

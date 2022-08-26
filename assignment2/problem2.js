function grade(marks) {
  switch (marks) {
    case marks >= 90 && marks <= 100:
      console.log("S grade");
      break;
    case marks >= 80:
      console.log("A grade");
      break;
    case marks >= 70:
      console.log("B grade");
      break;
    case marks >= 60:
      console.log("C grade");
      break;
    case marks >= 50:
      console.log("D grade");
      break;
    case marks >= 40:
      console.log("E grade");
      break;
    case marks >= 0:
      console.log("Student has failed");
      break;
    default:
      console.log("Invalid marks");
  }
}
grade(-1);

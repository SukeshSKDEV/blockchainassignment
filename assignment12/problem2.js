"use strict";
// a) Add data for 3 students (use map functions)
let studentDetails = new Map([
  ["id", [1, 2, 3]],
  ["name", ["Hitanshu", "Ninad", "Amandeep"]],
  ["scores", [90, 88, 92]],
]);

// b) Get Student Names using map functions
let studentName = studentDetails.get("name").map((nm) => nm);
console.log(studentName);
// studentDetails.delete("scores"); => Ending

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// one parameter
let id = studentDetails.get("id").map((std_id) => std_id);
console.log(id);
let nameStd = studentDetails.get("name").map((std_name) => std_name);
console.log(nameStd);
let scores = studentDetails.get("scores").map((std_scores) => std_scores);
console.log(scores);
// two parameter
studentDetails.forEach((value, key) => {
  console.log(`${key} ${value}`);
});
// three parameter
studentDetails.forEach((value, key, map) => {
  console.log(`${key} ${value}`, map);
});

// c) Delete Student Scores using map functions
studentDetails.delete("scores");
console.log(studentDetails);

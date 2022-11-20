let students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95 },
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 },
];

// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F

let studentGrade = students.map((student) => {
  if (student.marks >= 90) {
    return { name: student.name, grade: "A" };
  } else if (student.marks >= 80) {
    return { name: student.name, grade: "B" };
  } else if (student.marks >= 70) {
    return { name: student.name, grade: "C" };
  } else if (student.marks >= 60) {
    return { name: student.name, grade: "D" };
  } else if (student.marks >= 50) {
    return { name: student.name, grade: "E" };
  } else {
    return { name: student.name, grade: "F" };
  }
});
let studentGroup = { A: [], B: [], C: [], D: [], E: [], F: [] };
for (const { name, grade } of studentGrade) {
  if (grade === "A") {
    studentGroup[grade].push({ name, grade });
  } else if (grade === "A") {
    studentGroup[grade].push({ name, grade });
  } else if (grade === "B") {
    studentGroup[grade].push({ name, grade });
  } else if (grade === "C") {
    studentGroup[grade].push({ name, grade });
  } else if (grade === "D") {
    studentGroup[grade].push({ name, grade });
  } else if (grade === "E") {
    studentGroup[grade].push({ name, grade });
  } else if (grade === "F") {
    studentGroup[grade].push({ name, grade });
  }
}
console.log(studentGroup);

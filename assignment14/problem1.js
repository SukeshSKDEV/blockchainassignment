"use strict";
let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];

let empIT = employees.filter((employees) => employees.department === "IT");
console.log(empIT);
let empSalary = employees.filter((employees) => employees.Salary < 65000);
console.log(empSalary);

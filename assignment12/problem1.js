"use strict";
let employeesDetails = new Map([
  ["id", [67, 48, 29]],
  ["name", ["Hitanshu", "Ninad", "Amandeep"]],
  ["salary", [75000, 82000, 98000]],
]);
// a) Print an array of all employee ids
console.log(employeesDetails.get("id"));

// b) Print count of employees
console.log(employeesDetails.get("name").length);

// c) Print the name of the employee according to their id { key: value }
employeesDetails.get("id").forEach((id, index) => {
  console.log(`${id}:${employeesDetails.get("name")[index]}`);
});

// d) Store the salaries of all employees in an array
let salariesEmp = employeesDetails.get("salary");
console.log(salariesEmp);

// e) Calculate the average salary the company is paying to its employees
let avgSalary =
  salariesEmp.reduce((acc, cur) => acc + cur, 0) / salariesEmp.length;
console.log(avgSalary);

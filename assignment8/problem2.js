const S = new Set(["Ajay", "Vijay", "Sanjay", "Karan", "Ajay"]); // showing duplicate values are not possible
console.log(S);
S.add("Dhananjay");
console.log(S);
S.delete("Sanjay");
console.log(S);

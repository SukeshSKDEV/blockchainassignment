let S = "Icecream";
const truncateString = function (str) {
  const truncstr = str.length > 4 ? str.slice(0, 4) + `....` : str;
  console.log(truncstr);
};
truncateString(S);

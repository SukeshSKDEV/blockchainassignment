let patterNumberCollector = ``;
let number = 1;
for (let i = 1; i <= 4; i++) {
  // it displays four line
  for (j = 1; j <= i; j++) {
    patterNumberCollector += `${number} `;
    number++;
  }
  if (i < 4) {
    patterNumberCollector += `\n`; // Add blank space after each line
  }
}
console.log(patterNumberCollector);

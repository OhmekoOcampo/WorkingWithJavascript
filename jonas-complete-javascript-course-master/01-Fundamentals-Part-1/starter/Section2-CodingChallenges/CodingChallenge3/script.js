console.log("Coding Challenge #3");

console.log("Dolphin Data");
avgDolphin = (96 + 108 + 89) / 3;
console.log(`Dolphin Average is: ${avgDolphin}`);

console.log("Koalas Data");
avgKoalas = (88 + 91 + 110) / 3;
console.log(`Koalas Average is: ${avgKoalas}`);

console.log("Dolphin Data2");
avgDolphin2 = (97 + 112 + 80) / 3;
console.log(`Dolphin Average is: ${avgDolphin2}`);

console.log("Koalas Data2");
avgKoalas2 = (109 + 95 + 50) / 3;
console.log(`Koalas Average is: ${avgKoalas2}`);

console.log("Dolphin Data3");
avgDolphin3 = (97 + 112 + 101) / 3;
console.log(`Dolphin Average is: ${avgDolphin3}`);

console.log("Koalas Data3");
avgKoalas3 = (109 + 95 + 106) / 3;
console.log(`Koalas Average is: ${avgKoalas3}`);

if (avgDolphin2 > avgKoalas2 && avgDolphin2 >= 100) {
  console.log("Dolphins Win!");
} else if (avgKoalas2 > avgDolphin2 && avgKoalas2 >= 100) {
  console.log("Koalas win!");
} else if (
  avgKoalas2 === avgDolphin2 &&
  avgKoalas2 >= 100 &&
  avgDolphin2 >= 100
) {
  console.log("Draw! Koalas and Dolphins are tied!");
} else {
  console.log("Nobody wins, both teams lose!");
}

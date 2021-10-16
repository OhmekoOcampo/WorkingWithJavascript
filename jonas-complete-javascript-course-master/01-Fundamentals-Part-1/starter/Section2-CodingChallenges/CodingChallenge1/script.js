console.log("Coding Challenge #1");

console.log("Test Data 1");
weightMark1 = 78;
heightMark1 = 1.69;
weightJohn1 = 92;
heightJohn1 = 1.95;

let BMIMark1 = weightMark1 / heightMark1 ** 2;
let BMIJohn1 = weightJohn1 / heightJohn1 ** 2;
console.log(BMIMark1, BMIJohn1);

let markHigherBMI1 = BMIMark1 > BMIJohn1;
if (markHigherBMI1) {
  console.log("Mark has a higher BMI!");
} else {
  console.log("Mark has a lower BMI!");
}
console.log("Test Data 2");
weightMark2 = 95;
heightMark2 = 1.88;
weightJohn2 = 85;
heightJohn2 = 1.76;

let BMIMark2 = weightMark2 / heightMark2 ** 2;
let BMIJohn2 = weightJohn2 / heightJohn2 ** 2;
console.log(BMIMark2, BMIJohn2);

let markHigherBMI2 = BMIMark2 > BMIJohn2;
if (markHigherBMI2) {
  console.log("Mark has a higher BMI!");
} else {
  console.log("Mark has a lower BMI!");
}

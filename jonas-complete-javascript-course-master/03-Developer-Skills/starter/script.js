// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

if (x === 3) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log();

console.log(1992);
*/

// (59) Using Google, StackOverlow and MDN

//Temperature Amplitude, Max, Min Calculator.

/*
const temperatures = [
  3,
  -200,
  -2,
  -6,
  -1,
  'error',
  9,
  13,
  17,
  350,
  15,
  14,
  9,
  5,
  100,
  -100,
];

const tempAmplitudeCalc = function (temps) {
  let maxTemp = temps[0]; //Shouldn't put 0, because you are assuming a value of zero, when there could be no value of zero to begin with in the array. 
  let minTemp = temps[0];
  for (let i = 0; i <= temps.length - 1; i++) {
    if (typeof temps[i] === 'number') {
      if (maxTemp < temps[i]) {
        maxTemp = temps[i];
      }
      if (minTemp > temps[i]) {
        minTemp = temps[i];
      }
    }
  }
  console.log(maxTemp);
  console.log(minTemp);
  console.log(`The temp amplitude is: ${maxTemp - minTemp}`);
};

tempAmplitudeCalc(temperatures);


//Array Concatenator

let array1 = [3, 4, 5, 6];
let array2 = [7, 8, 9, 10];

const combineArrays = function (arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    arr3.push(arr1[i]);
  }
  for (let i = 0; i <= arr2.length - 1; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
};

console.log(combineArrays(array1, array2));

*/

// (61) Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    //C Fix the Bug
    value: Number(prompt('Degrees Celcius, please: ')),
  };

  //B Find the Bug
  console.log(measurement);
  console.table(measurement); //Different way to display an object in the console.

  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value); //Different ways to format a console.log.

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify a bug, identified that kelvin creation isn't .
console.log(measureKelvin());

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Coding Challenge #1

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecastString = '';
  for (let i = 0; i <= arr.length - 1; i++) {
    forecastString = forecastString + `${arr[i]} Celcius in ${i + 1} days...`;
    //console.log(`${arr[i]} Celcius in ${i + 1} days...`);
  }
  console.log(forecastString);
  console.log('\n');
};

printForecast(temperatures1);
printForecast(temperatures2);

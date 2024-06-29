/* 

1-method 

function average(number) {
  let sum = 0;

  number.forEach((number) => {
    sum += number; // sum = sum = number
  });

  const average = sum / number.length;

  return average;
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(average([2, 5, 7, 1, -2]));
console.log(average([10, 10, 10, 10, 9]));
console.log(average([25, 75]));

/*

// ------------------------------------------------------------

/*

2 - method

// function average(numbers) {
//   const sum = numbers.reduce((accum, num) => accum + num, 0);
//   const avg = sum / numbers.length;
//   return avg;
// }

// console.log(average([10, 9, 6, 8, 9, 1, 5, 7]));
// console.log(average([2, 5, 7, 1, -2]));
// console.log(average([10, 10, 10, 10, 9]));
// console.log(average([25, 75]));

*/

// ------------------------------------------------------------

/*

3º method

function average(...numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  const avg = sum / numbers.length;
  return avg;
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7));
console.log(average(2, 5, 7, 1, -2));
console.log(average(10, 10, 10, 10, 9));
console.log(average(25, 75));

*/

// -----------------------------------------------------------

/*

4º method

function average(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7));
console.log(average(2, 5, 7, 1, -2));
console.log(average(10, 10, 10, 10, 9));
console.log(average(25, 75));

*/

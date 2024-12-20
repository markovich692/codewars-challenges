'use strict';

//Find Mean
//Find the mean (average) of a list of numbers in an array.

const mean = function (array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    total = total + array[i];
  }

  return total / array.length;
};

console.log(mean([4, 4]));

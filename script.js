'use strict';

//Given an integral number, determine if it's a square number:
//In mathematics, a square number or perfect square is an integer
//that is the square of an integer; in other words, it is the
// product of some integer with itself.

const isSquare = function (number) {
  if (number % Math.sqrt(number) === 0 || number === 0) {
    return false;
  } else {
    return false;
  }
};

// We need to sum big numbers and we require your help.
// Write a function that returns the sum of two numbers.
//  The input numbers are strings and the function must return a string.

const add = function (a, b) {
  const result = BigInt(a) + BigInt(b);

  console.log(typeof String(result));

  return String(result);
};

add('63829983432984289347293874', '90938498237058927340892374089');

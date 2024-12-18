'use strict';

//Write a function that removes every lone 9 that is inbetween 7s.
//"79712312" --> "7712312"
//"79797"    --> "777"

function sevenAte9(str) {
  const numberInput = String(str);
  const array = numberInput.split('');

  let newNumber = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '9' && array[i - 1] === '7' && array[i + 1] === '7') {
      array.splice(i, 1);
    } else {
      array;
    }
  }

  console.log(array);

  for (let j = 0; j < array.length; j++) {
    newNumber = newNumber + array[j];
  }

  return newNumber;
}

remove(79712312);

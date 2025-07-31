/*
---CALCULATING WITH FUNCTIONS 
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3
*/

function zero() {}
function one() {}

function two(operandFirst) {
  if (!operandFirst) return 2;
  const res = 2 + Number(operandFirst);
  return res;
}

function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus(operator) {
  const add = '+' + String(operator);
  return add;
}

function minus() {}
function times() {}
function dividedBy() {}

/*
function two(operandFirst) {
  if (!operandFirst) return 2;

  const res = 2 + Number(operandFirst);
  return res;
}

function plus(operator) {
  const add = '+' + String(operator);
  return add;
}

const finalResult = two(plus(two()));
console.log(finalResult);
*/

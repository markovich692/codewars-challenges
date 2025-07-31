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

/*
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}
function minus() {}
function times() {}
function dividedBy() {}
*/

function two(operand = 2) {
  return operand;
}

function plus(operand) {
  return +operand;
}

const res = plus(two());

console.log(res);

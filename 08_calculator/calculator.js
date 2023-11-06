const add = function(x, y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  let sum = 0;
	for (const number of array) {
    sum += number
  }
  return sum;
}

const multiply = function(array) {
  let product = 1;
	for (const number of array) {
    product *= number
  }
  return product;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
	
};

const factorial = function(number) {
  let x = number-1
  let factorial = number;
 while (x > 1) {
  factorial *= x;
  x--;
 }
 if (number === 1) {
  return 1;
 } else if (number === 0) {
  return 1;
 } else {
  return factorial;
 }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

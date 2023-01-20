const add = function(a, b) {
	return a + b;
}; 

const subtract = function(a, b) {
	return a - b;
};

const sum = function(list) {
  let total = 0;
  for (let number of list) {
    total += number;
  }
  return total;
};

const multiply = function(list) {
  let total = 1;
  for (let number of list) {
    total *= number;
  }
  return total;
};

const power = function(number, pow) {
  return number ** pow
};

const factorial = function(number) {
  let total = 1;

  for (let i = 1; i <= number; i++) {
    total *= i
  }

  return total;
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

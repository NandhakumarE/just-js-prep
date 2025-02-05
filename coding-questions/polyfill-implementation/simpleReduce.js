/*
 Polyfill for Array.prototype.simpleReduce

 Syntax:
 array.simpleReduce((accumulator, value, index, array) => accumulator, initialValue);
*/

// Implementation
Array.prototype.simpleReduce = function (callback = null, initialValue = 0) {
  if (!callback) return initialValue;

  let accumulator = initialValue;

  for (let index = 0; index < this.length; index++) {
    accumulator = callback(result, this[index], index, this);
  }
  return accumulator;
};

// Test Runner
console.log([1, 2, 3, 4, 5, 6].reduce((prev, curr) => prev + curr, 0));

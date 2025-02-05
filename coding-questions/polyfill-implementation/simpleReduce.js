/*
 How it works:

 Syntax:
 Array.reduce((accumulator, value, index, array) => newAccumulator, initialValue);

 - Iterates over each element in the array.
 - Accumulates a single result based on the callback function.
 - Uses `initialValue` as the starting accumulator (optional).

 Returns:
 - The final accumulated result (can be a number, object, array, etc.).
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

/*
 How it works:

 Syntax:
 Array.map((value, index, array) => modifiedValue);

 - Iterates over each element in the array.
 - Transforms each element based on the callback function.
 - Does not modify the original array.

 Returns:
 - A new array with the modified values.
*/

// Implementation.
Array.prototype.simpleMap = function (callback = null) {
  if (!callback) return [];

  const newArray = [];

  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this?.[index], index, this));
  }
  return newArray;
};

// Test Runner.
const arr = [1, 2, 3, 4, 5, 6];
const modifiedData = arr.simpleMap((value) => value + 1);
console.log(modifiedData);

/*
Polyfill for Array.prototype.map

Syntax:
 array.simpleMap((value, index, array) => modifiedValue);
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

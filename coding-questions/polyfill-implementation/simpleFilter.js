/*
 Polyfill for Array.prototype.filter

 Syntax:
 array.simpleFilter((value, index, array) => boolean);
*/

// Implementation
Array.prototype.simpleFilter = function (callback = null) {
  if (!callback) return [];

  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }
  return newArray;
};

// Test Runner
console.log([1, 2, 3, 4, 5].simpleFilter((value) => value >= 3));

/*
 How it works:

 Syntax:
 Array.filter((value, index, array) => boolean);

 - The callback function runs for each element in the array.
 - It includes only those elements for which the callback returns `true`.

 Returns:
 - A new array containing the filtered elements.
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

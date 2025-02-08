/*
Polyfill for Object.prototype.groupBy

Syntax:
 const grouped = simpleGroupBy(items, callbackFn);
*/

// implementation
function simpleGroupBy(items = [], callbackFn = null) {
  if (typeof callbackFn != "function") {
    throw new Error("undefined is not a function");
  }

  if (typeof items === "string") {
    items = items.split("");
  }
  if (items.length === 0) return {};

  const groupedResult = {};
  items.forEach((eachItem) => {
    const key = callbackFn(eachItem);
    if (Object.hasOwn(groupedResult, key)) {
      groupedResult[key].push(eachItem);
    } else {
      groupedResult[key] = [eachItem];
    }
  });
  return groupedResult;
}

// Test Runner

const groupedData1 = simpleGroupBy([1.2, 1.5, 2.3, 2.8], Math.floor);
console.log(groupedData1);

const groupedData2 = simpleGroupBy("hello", (char) => char);
console.log(groupedData2);

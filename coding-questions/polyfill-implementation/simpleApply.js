/*
 How it works:

 Syntax:
 functionName.apply(thisArg, [arg1, arg2, ...]);

 - Calls a function with a specified `this` value (`thisArg`).
 - Passes arguments as an array (`[arg1, arg2, ...]`).

 Use cases:
 - Useful when arguments are already in an array.
 - Borrowing methods from other objects.
 - Finding max/min values from an array using `Math.max` or `Math.min`.

 Example:
 function sum(a, b) {
   return a + b;
 }
 console.log(sum.apply(null, [5, 10])); // Output: 15
*/

// implementation

Function.prototype.simpleApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);

  // If context is null or undefined, default to the global object;
  context = context ?? globalThis;
  args = args ?? [];

  context.fn = this;
  const result = context.fn(...args);

  // Clean up to avoid modifying the original object.
  delete context.fn;

  return result;
};

// Test Runner.
const person = { name: "Alice" };
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
greet.simpleApply(person, ["Hello"]); // with context

greet.simpleApply(null, ["Hello"]); // without context

console.log(Math.max.simpleApply(null, [1, 2, 3, 4, 5, 6, 7]));

greet.simpleApply(null, null);

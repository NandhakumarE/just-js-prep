/*
 How it works:

 Syntax:
 functionName.call(thisArg, arg1, arg2, ...);

 - Invokes the function with a specified `this` context (`thisArg`).
 - Passes additional arguments (`arg1, arg2, ...`) to the function.

 Use case:
 - Useful for borrowing methods from other objects or setting the `this` value explicitly.

 Example:
 const person = { name: "Alice" };
 function greet(greeting) {
   console.log(`${greeting}, ${this.name}`);
 }
 greet.call(person, "Hello"); // Output: "Hello, Alice"
*/

// Implementation
Function.prototype.simpleCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);

  // If context is null or undefined, default to the global object;
  context = context ?? globalThis;

  context.fn = this;
  const result = context.fn(...args);

  // Clean up to avoid modifying the original object.
  delete context.fn;

  return result;
};

// Test Runner
const person = { name: "Alice" };
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

greet.simpleCall(person, "Good Morning");
greet.simpleCall(null, "Good Morning");

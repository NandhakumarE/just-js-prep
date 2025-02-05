/*
 Polyfill for Function.prototype.call

 Syntax:
 functionName.call(thisArg, arg1, arg2, ...);
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

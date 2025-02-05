/*
 Polyfill for Function.prototype.bind

 Syntax:
 functionName.bind(thisArg, arg1, arg2, ...);
*/

// Implementation
Function.prototype.simpleBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);

  // If context is null or undefined, default to the global object;
  context = context ?? globalThis;

  const originalFn = this;

  // Return a new function with the bound context and arguments
  const resultFn = (...args1) => {
    context.fn = originalFn;
    const result = context.fn(...args, ...args1);

    // Clean up to avoid modifying the original object.
    delete context.fn;

    return result;
  };

  return resultFn;
};

// Test Runner
function greet(message, world) {
  console.log(`${message}, ${this.name}, ${world}`);
}

const person = { name: "Alice" };
const greetAlice = greet.simpleBind(person, "Hello");

greetAlice("Sample", "BAC"); // Output: "Hello, Alice"

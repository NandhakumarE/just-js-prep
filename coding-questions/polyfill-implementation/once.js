/*
Polyfill for Function Execution Only Once

Syntax:
 const runOnce = once(fn, context);
 runOnce(...args); // Executes fn only once
*/

// Implementation
const once = function (fn = null, context = {}) {
  if (typeof fn !== "function") throw new Error("Expected a function");

  let data = null;
  let originalFn = fn;

  const resultFn = function () {
    if (originalFn) {
      data = originalFn.apply(context || globalThis, arguments);

      // Ensuring the function runs only once
      originalFn = null;
    }
    return data;
  };

  return resultFn;
};

// Test Runner

// Function should execute only once
const hello = once(() => console.log("Hello, world!"));
hello(); // Output: "Hello, world!"
hello(); // No output
hello(); // No output

console.log("----");

// Function should return the first computed result on subsequent calls
const sumOnce = once((...args) => {
  return args.reduce((prev, curr) => prev + curr, 0);
});

console.log(sumOnce(1, 2, 3, 4, 5, 21, 31)); // First execution: 67
console.log(sumOnce(1, 2)); // No execution, returns 67
console.log(sumOnce(0)); // No execution, returns 67

// Function should also work with different contexts
const user = {
  name: "Nandha",
  greet: once(function () {
    return `Hello, ${this.name}!`;
  }),
};

console.log(user.greet()); // "Hello, Nandha!"
console.log(user.greet()); // No execution, returns "Hello, Nandha!"

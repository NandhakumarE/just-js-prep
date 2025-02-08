/*
 Polyfill for Throttle Function

 Syntax:
 const throttledFunc = throttle(callback, limit);
*/

// Implementation
function throttle(fn = null, delay = 0) {
  if (typeof fn != "function") {
    throw new Error("Expected a function");
  }

  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

// Test Runner
function logMessage(message) {
  console.log(message, Date.now());
}

const throttledFn = throttle(logMessage, 2000);

// Calls the function, then ignores calls within 2 seconds
throttledFn("Hello 1"); // Executes immediately
throttledFn("Hello 2"); // Ignored
setTimeout(() => throttledFn("Executed after delay"), 2500);

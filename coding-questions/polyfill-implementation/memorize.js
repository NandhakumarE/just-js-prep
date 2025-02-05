/*
Polyfill for memoize (Caching function results)

Syntax:
 const memoizedFn = memorize(originalFunction);
*/

// Implementation
const memorize = function (fn = null) {
  if (typeof fn !== "function") throw new Error("Expected a function");

  const cache = {};

  return function (...args) {
    const cacheKey = JSON.stringify(args);
    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    const result = fn.apply(this, args);
    cache[cacheKey] = result;
    return result;
  };
};

// Test Runner

const memoizedFibonacci = memorize((n) => {
  if (n <= 1) return n;
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

console.time("With Memoization");
console.log(memoizedFibonacci(35)); // // Much faster due to caching
console.timeEnd("With Memoization");

console.time("With Memoization");
console.log(memoizedFibonacci(35)); // Retrieves from cache instantly
console.timeEnd("With Memoization");

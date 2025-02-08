/*
 Polyfill for Debounce Function

 Syntax:
 const debouncedFunc = debounce(callback, delay);
*/

// Implementation
function debounce(fn = null, delay = 0) {
  if (typeof fn != "function") {
    throw new Error("Expected a function");
  }

  let timerId = null;

  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Test Runner

function fetchData() {
  console.log("API call made!");
}

const debouncedFetch = debounce(fetchData, 300);

// Simulating rapid calls
debouncedFetch();
debouncedFetch();
debouncedFetch();

// ouput - prints only once
// API call made!

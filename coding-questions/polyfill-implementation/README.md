# Polyfill Implementations
This repository provides **JavaScript polyfills** for popular methods and functions that might not be supported in older browsers or environments. Polyfills act as "shims" or "fills" to bridge the gaps, ensuring that missing features in certain JavaScript engines are still available. This helps deliver **consistent and reliable behavior** across different browsers, providing a smoother experience for users regardless of their environment.

### Files in this Folder:
- **[simpleBind.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleBind.js)**: Polyfill for `Function.prototype.bind`
- **[simpleCall.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleCall.js)**: Polyfill for `Function.prototype.call`
- **[simpleApply.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleApply.js)**: Polyfill for `Function.prototype.apply`
- **[simpleFilter.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleFilter.js)**: Polyfill for `Array.prototype.filter`
- **[simpleMap.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleMap.js)**: Polyfill for `Array.prototype.map`
- **[simpleReduce.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleReduce.js)**: Polyfill for `Array.prototype.reduce`
- **[once.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/once.js)**: Polyfill for ensuring a function is called only once
- **[memorize.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/memorize.js)**: Polyfill to memorize function results for optimization
- **[simpleGroupBy.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleGroupBy.js)**: Polyfill for `Object.prototype.groupBy`
- **[flattenObject.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/flattenObject.js)**: Polyfill for  utility function to flatten a nested object
- **[debounce.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/debounce.js)**: Polyfill for Debounce Function
- **[throttle.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/throttle.js)**: Polyfill for Throttle Function

## Polyfill Files
Each polyfill file includes:
1. **Syntax**: The syntax of the method or function.
2. **Key Points**: Important details about the method's behavior and use.
3. **Example**: A sample usage with expected output.
4. **Implementation**: The polyfill code itself.
5. **Test Runner**: Code to verify the correctness of the implementation.

### Example: `simpleBind.js`

```javascript
/*
 Polyfill for Function.prototype.bind

 Syntax:
 functionName.simpleBind(thisArg, arg1, arg2, ...);

 Key Points:
 - Creates a new function that, when called, has its `this` value set to the provided `thisArg`.
 - The new function can be invoked with additional arguments passed at call time.

 Example:
 const greet = function(msg) {
   console.log(msg + ', ' + this.name);
 };

 const person = { name: "Alice" };
 const greetPerson = greet.simpleBind(person, "Hello");

 greetPerson(); // Output: "Hello, Alice"
*/ 
```
### Example: `simpleCall.js`

```javascript
/*
 Polyfill for Function.prototype.call

 Syntax:
 functionName.simpleCall(thisArg, arg1, arg2, ...);

 - Invokes the function with a specified `this` context (`thisArg`).
 - Passes additional arguments (`arg1, arg2, ...`) to the function.

 Use case:
 - Useful for borrowing methods from other objects or setting the `this` value explicitly.

 Example:
 const person = { name: "Alice" };
 function greet(greeting) {
   console.log(`${greeting}, ${this.name}`);
 }
 greet.simpleCall(person, "Hello"); // Output: "Hello, Alice"
*/
```
### Example: `simpleApply.js`

```javascript
/*
Polyfill for Function.prototype.apply

Syntax:
 functionName.simpleApply(thisArg, [arg1, arg2, ...]);

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
 console.log(sum.simpleApply(null, [5, 10])); // Output: 15
*/
```
### Example: `simpleFilter.js`

```javascript
/*
Polyfill for Array.prototype.filter

Syntax:
 array.simpleFilter((value, index, array) => boolean);

 - The callback function is executed for each element in the array.
 - Returns a new array with elements for which the callback returned `true`.

 Use cases:
 - Filtering elements based on a condition.
 - Removing items from an array that don't meet a certain criteria.

 Example:
 const numbers = [1, 2, 3, 4, 5];
 const evenNumbers = numbers.simpleFilter(n => n % 2 === 0);
 console.log(evenNumbers); // Output: [2, 4]
*/
```
### Example: `simpleMap.js`

```javascript
/*
Polyfill for Array.prototype.map

Syntax:
 array.simpleMap((value, index, array) => modifiedValue);

 - Executes a provided function once for each element in the array.
 - Returns a new array with the results of calling the provided function on each element.

 Use cases:
 - When you need to transform the elements of an array.
 - Mapping over an array to extract or modify its values.

 Example:
 const numbers = [1, 2, 3];
 const doubled = numbers.simpleMap(n => n * 2);
 console.log(doubled); // Output: [2, 4, 6]
*/
```
### Example: `simpleReduce.js`

```javascript
/*
Polyfill for Array.prototype.reduce

Syntax:
 array.simpleReduce((accumulator, value, index, array) => accumulator, initialValue);

 - Applies a function to each element in the array (from left to right) to reduce it to a single value.
 - The function's return value is passed to the next iteration as the accumulator.

 Use cases:
 - Summing up values in an array.
 - Reducing an array of objects to a single object.
 - Calculating a single result based on multiple array elements.

 Example:
 const numbers = [1, 2, 3, 4];
 const sum = numbers.simpleReduce((acc, n) => acc + n, 0);
 console.log(sum); // Output: 10
*/
```
### Example: `once.js`

```javascript
/*
Polyfill for Function Execution Only Once

Syntax:
 const runOnce = once(fn, context);
 runOnce(...args); // Executes fn only once

 - Ensures that a given function runs only once.
 - Stores the result of the first execution and returns it on subsequent calls.
 - Uses `apply` to maintain the original function's `this` context and arguments.

 Use cases:
 - Preventing multiple API calls for an initialization function.
 - Running expensive computations only once.
 - Ensuring event handlers execute only on the first trigger.

 Example:
 const initialize = once(() => console.log("Initialized!"));
 initialize(); // Output: "Initialized!"
 initialize(); // No output (returns stored result)
*/

```
### Example: `memoize.js`

```javascript
/*
Polyfill for Function.memoize (Caching function results)

Syntax:
 const memoizedFn = memorize(originalFunction);

- Stores the results of expensive function calls and returns the cached result when the same inputs occur again.
- Uses an internal object `map` to cache computed results.
- Improves performance by avoiding redundant computations.

Returns:
- A new function that remembers previously computed results.

Use Cases:
1. **Optimizing Expensive Computations**  
   - Avoids recalculating results for repeated inputs.  
   - Example: Fibonacci sequence, factorial calculations.  
2. **Reducing API Calls**  
   - Caches previously fetched data to prevent unnecessary network requests.  
3. **Improving UI Performance**  
   - Avoids expensive DOM calculations and layout shifts.

 Example 1: Optimizing Expensive Computations (Fibonacci)
--------------------------------------------------------
const memoizedFibonacci = memorize((n) => {
  if (n <= 1) return n;
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

console.time("With Memoization");
console.log(memoizedFibonacci(35)); // Much faster due to caching
console.timeEnd("With Memoization");
*/

```
### Example: `simpleGroupBy.js`

```javascript
/*
Polyfill for Object.prototype.groupBy

Syntax:
 const grouped = simpleGroupBy(items, callbackFn);
 
 - Groups elements of an array (or characters of a string) based on the return value of `callbackFn`.
 - Returns an object where keys are the computed group identifiers and values are arrays of grouped elements.
 - Throws an error if `callbackFn` is not a function.
 - Supports string input by splitting it into individual characters.

Use cases:
 - Categorizing data based on properties (e.g., grouping numbers by their integer part).
 - Organizing strings by character occurrences.
 - Clustering items based on computed values.

Example:
 simpleGroupBy([1.2, 1.5, 2.3, 2.8], Math.floor);
 // Output: { 1: [1.2, 1.5], 2: [2.3, 2.8] }

 simpleGroupBy("hello", (char) => char);
 // Output: { h: ['h'], e: ['e'], l: ['l', 'l'], o: ['o'] }
*/

```
### Example: `flattenObject.js`

```javascript
/*
 Utility function to flatten a nested object

 Syntax:
 flattenObject(obj, parentKey, result);

 Key Points:
 - Converts a deeply nested object into a single-level object.
 - Uses dot notation (e.g., "user.address.city") for nested keys.
 - Preserves primitive values and arrays without modification.
 - Handles null values properly, avoiding errors.

 Example:
 const nestedObj = {
   user: {
     name: "Alice",
     address: {
       city: "New York",
       zip: 10001
     }
   },
   hobbies: ["reading", "traveling"]
 };

 const flattened = flattenObject(nestedObj);

 console.log(flattened);
 // Output:
 // {
 //   "user.name": "Alice",
 //   "user.address.city": "New York",
 //   "user.address.zip": 10001",
 //   "hobbies.0": "reading",
 //   "hobbies.1": "traveling",
 // }
*/
```
### Example: `debounce.js`

```javascript
/*
 Polyfill for Debounce Function

 Syntax:
 const debouncedFunc = debounce(callback, delay);

 Key Points:
 - Ensures a function is executed only after a specified delay.
 - Resets the timer if the function is called again within the delay period.
 - Useful for optimizing events like search inputs, resize, and button clicks.

 Example:
 function fetchData() {
   console.log("API call made!");
 }

 const debouncedFetch = debounce(fetchData, 300);

 // Simulating rapid calls
 debouncedFetch();
 debouncedFetch();
 debouncedFetch();

 // Only one "API call made!" will be logged after 300ms from the last call.
*/
```
### Example: `throttle.js`

```javascript
/*
 Polyfill for Throttle Function

 Syntax:
 const throttledFunc = throttle(callback, limit);

 Key Points:
 - Ensures a function is executed at most once in a specified time interval.
 - Useful for optimizing events like scroll, resize, and mouse movements.
 - Unlike debounce, it guarantees execution at regular intervals.

 Example:
 function logScroll() {
   console.log("Scroll event triggered!");
 }

 const throttledScroll = throttle(logScroll, 1000);

 window.addEventListener("scroll", throttledScroll);

 // Even if the user scrolls continuously, "Scroll event triggered!"
 // will be logged at most once every 1000ms.
*/

```

### How to Use
1. **Clone the repository** to your local machine
   ```bash
   git clone https://github.com/your-username/just-js-prep.git
   ```
2. Navigate to the **polyfill-implementation** folder in your terminal or command prompt:
   ```bash
   cd just-js-prep/coding-questions/polyfill-implementation
   ```
3. Run a polyfill to see it in action. You can execute any polyfill file directly, for example: 
   ```bash
   node bind.js 
   ```



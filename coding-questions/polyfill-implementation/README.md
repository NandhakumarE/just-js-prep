# Polyfill Implementations
This repository provides **JavaScript polyfills** for popular methods and functions that might not be supported in older browsers or environments. Polyfills act as "shims" or "fills" to bridge the gaps, ensuring that missing features in certain JavaScript engines are still available. This helps deliver **consistent and reliable behavior** across different browsers and platforms, providing a smoother experience for users regardless of their environment.

### Files in this Folder:
- **[simpleBind.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleBind.js)**: Polyfill for `Function.prototype.bind`
- **[simpleCall.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleCall.js)**: Polyfill for `Function.prototype.call`
- **[simpleApply.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleApply.js)**: Polyfill for `Function.prototype.apply`
- **[simpleFilter.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleFilter.js)**: Polyfill for `Array.prototype.filter`
- **[simpleMap.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleMap.js)**: Polyfill for `Array.prototype.map`
- **[simpleReduce.js](https://github.com/NandhakumarE/just-js-prep/blob/main/coding-questions/polyfill-implementation/simpleReduce.js)**: Polyfill for `Array.prototype.reduce`
- **once.js**: Polyfill for ensuring a function is called only once
- **memorize.js**: Polyfill to memorize function results for optimization

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
 Polyfill for Function.prototype.simpleBind

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
 Polyfill for Function.prototype.simpleCall

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
Polyfill for Function.prototype.simpleApply

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
Polyfill for Array.prototype.simpleFilter

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
Polyfill for Array.prototype.simpleMap

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
Polyfill for Array.prototype.simpleReduce

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



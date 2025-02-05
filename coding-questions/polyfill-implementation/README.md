# Polyfill Implementations
This repository provides **JavaScript polyfills** for popular methods and functions that might not be supported in older browsers or environments. Polyfills act as "shims" or "fills" to bridge the gaps, ensuring that missing features in certain JavaScript engines are still available. This helps deliver **consistent and reliable behavior** across different browsers and platforms, providing a smoother experience for users regardless of their environment.

### Files in this Folder:
- **bind.js**: Polyfill for `Function.prototype.bind`
- **call.js**: Polyfill for `Function.prototype.call`
- **apply.js**: Polyfill for `Function.prototype.apply`
- **filter.js**: Polyfill for `Array.prototype.filter`
- **map.js**: Polyfill for `Array.prototype.map`
- **reduce.js**: Polyfill for `Array.prototype.reduce`
- **once.js**: Polyfill for ensuring a function is called only once
- **memorize.js**: Polyfill to memorize function results for optimization

## Polyfill Files
Each polyfill file includes:
1. **Syntax**: The syntax of the method or function.
2. **Key Points**: Important details about the method's behavior and use.
3. **Example**: A sample usage with expected output.
4. **Implementation**: The polyfill code itself.
5. **Test Runner**: Code to verify the correctness of the implementation.

### Example: `bind.js`

```javascript
/*
 Polyfill for Function.prototype.bind

 Syntax:
 functionName.bind(thisArg, arg1, arg2, ...);

 Key Points:
 - Creates a new function that, when called, has its `this` value set to the provided `thisArg`.
 - The new function can be invoked with additional arguments passed at call time.

 Example:
 const greet = function(msg) {
   console.log(msg + ', ' + this.name);
 };

 const person = { name: "Alice" };
 const greetPerson = greet.bind(person, "Hello");

 greetPerson(); // Output: "Hello, Alice"
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



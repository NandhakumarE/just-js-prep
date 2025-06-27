/*
**Question: Implement a Middleware Chain System**

Design a class Middleware that allows you to register and execute a chain of middleware functions, similar to the middleware pattern in frameworks like Express.js.

Each middleware function:

    1.Accepts two arguments: context (an object representing the request/response data) and next (a callback to invoke the next middleware in the chain).

    2.Can choose whether or not to call next(), thereby controlling the flow of the chain.

Your implementation should meet the following requirements:

Class: Middleware
    1.use(callback: Function): Registers a middleware function to the chain.

    2.execute(context: Object): Starts executing the chain from the first middleware, passing along the context object.

The execution should:

    1.Proceed through each middleware in the order they were registered.

    2.Stop if any middleware does not call next().
*/

/* Solution */
class Middleware{
  callback;
  constructor() {
    this.callback = [];
  }
  
  use(callback){
    this.callback.push(callback);
  }
  
  #executeRecursive(data, index) {
    if(index >= this.callback.length){
      return null;
    }
    
    return this.callback[index](data, () => this.#executeRecursive(data, index+1));
  }
  
  execute(data){
    this.#executeRecursive(data, 0);
  }
}


// Example usage
const chain = new Middleware();

// Logger middleware
chain.use((context, next) => {
  console.log(`Request started: ${context.request}`);
  next(); // Pass control to the next middleware
  console.log('Request ended'); // This runs after all middleware complete
});

// Authentication middleware
chain.use((context, next) => {
  if (context.user === 'admin') {
    console.log('Authentication successful');
    next(); // Continue to next middleware
  } else {
    console.log('Authentication failed');
    // Not calling next() stops the chain
  }
});

// Business logic middleware
chain.use((context, next) => {
  console.log(`Processing request: ${context.request}`);
  context.response = 'Request processed successfully';
  next();
});

// Execute with admin user
chain.execute({
  request: 'Get data',
  user: 'admin',
  response: null
});

console.log('-------------------');

// Execute with non-admin user (chain will stop at authentication)
chain.execute({
  request: 'Delete data',
  user: 'guest',
  response: null
});


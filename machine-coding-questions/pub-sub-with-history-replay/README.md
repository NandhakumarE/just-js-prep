# Pub-Sub System

## Overview
The **Pub-Sub System** is a simple implementation of the Publish-Subscribe design pattern. It allows publishers to send data to specific channels, and subscribers to receive updates when data is published. Subscribers can also subscribe without an initial callback and receive historical data when they provide a callback later.

## Features
- Publish data to specific channels.
- Subscribe to channels with or without a callback.
- Receive all past published data upon providing a callback after subscription.

## Folder Structure
```
|-- pub-sub/
    |-- index.js       # JavaScript implementation of the Pub-Sub System
    |-- index.html     # HTML file to test the functionality (optional)
    |-- README.md      # Documentation of the project
```

## Implementation Details
### Core Functions
1. **`publish(channelName, data)`**
   - Publishes data to a specific channel.
   - Notifies all subscribers who have provided callbacks.
   - Stores data in the channel's history for future subscribers.

2. **`subscribe(channelName, subscriber, callback)`**
   - Subscribes a user to a specific channel.
   - If a callback is provided, it notifies the subscriber immediately of all historical data.
   - If no callback is provided, the subscriber can receive historical data later by providing a callback.

### Data Structure
```javascript
channels = {
  channelName: {
    subscribers: Map<subscriber, callback>,
    history: [data1, data2, ...]
  },
};
```

## How to Run
### Using HTML and JS
1. Open the `index.html` file in your browser.
2. The file is preloaded with sample publisher and subscriber scripts.
3. Check the console for output.

### Directly in Node.js
1. Run the `index.js` file:
   ```bash
   node index.js
   ```
2. Modify the `index.js` file to test additional scenarios.

## Example Usage
### Sample Code
```javascript
const sdkInstance = new SDK();

// Subscribers
const person1 = {};
const person2 = {};

// Subscribe person1 to the "discovery" channel without a callback
sdkInstance.subscribe("discovery", person1);

// Subscribe person2 to the "discovery" channel with a callback
sdkInstance.subscribe("discovery", person2, (data) => console.log("Subscriber 2:", data));

// Publish data to the "discovery" channel
sdkInstance.publish("discovery", "Hello, World!");
sdkInstance.publish("discovery", "Welcome to the Pub-Sub System");

// Log an indication that all publish calls have been executed
console.log('All publish actions have been executed and notifications sent.')

// Add a callback for person1 after publishing messages
sdkInstance.subscribe("discovery", person1, (data) => console.log("Subscriber 1:", data));
```

### Expected Output
```plaintext
Subscriber 2: Hello, World!
Subscriber 2: Welcome to the Pub-Sub System
All publish actions have been executed and notifications sent.
Subscriber 1: Hello, World!
Subscriber 1: Welcome to the Pub-Sub System
```

## Next Steps
- Add test cases to validate the functionality.
- Enhance error handling and edge case management.

## License
This project is licensed under the MIT License.

/*
********* Requirement **********

1. Subscribers
  Subscribers can subscribe to a channel with a:
    1. Channel name.
    2. Callback function (optional).
  If a callback function is not provided during subscription:
    1. The subscriber will not be notified of updates immediately.
    2. However, the system will track all published data for that channel.
    3. Once the subscriber provides a callback, all the historical data published to the channel will be sent to the subscriber via the callback.

2. Publishers
  a.Publishers can publish data to a channel by providing:
    1.Channel name.
    2.Data to be published.
  b.All subscribers with a valid callback for that channel will be notified immediately with the data.
  c.The system will store the published data historically for each channel to support late notifications for subscribers without a callback.

*/

class SDK {
  static #instance;

  #channels = {}; // {channelName: {subscribers: Map<subscriberObject, callback>, history: []}}
  constructor() {
    if (!SDK.#instance) {
      SDK.#instance = this;
    }
    return SDK.#instance;
  }

  publish(channelName, data) {
    let channelData = this.#channels[channelName];

    if (channelData) {
      // Notify all subscribers with callbacks
      channelData.subscribers.forEach((callback) => {
        callback?.(data);
      });

      // Store the published data in history
      channelData.history.push(data);
    }
  }

  subscribe(channelName, subscriber, callback) {
    let channelData = this.#channels[channelName];

    // Initialize the channel if it doesn't exist
    if (!channelData) {
      channelData = { subscribers: new Map(), history: [] };
      this.#channels[channelName] = channelData;
    }

    // If the subscriber already exists and callback is null, do nothing
    const existingCallBack = channelData.subcriber.get(subscriber);

    // If a new callback is provided, replay history for the subscriber
    if (existingCallBack === null && callback === null) {
      return;
    }

    if (callback) {
      channelData.history.forEach((eachHistory) => callback(eachHistory));
      channelData.subscribers.set(subscriber, callback);
    } else {
      // If no callback is provided, just add the subscriber with a null callback
      channelData.subscribers.set(subscriber, null);
    }
  }
}

// Test Runner

const person1 = {};
const person2 = {};

const sdkInstance = new SDK();
sdkInstance.subscribe("discovery", person1);
sdkInstance.subscribe("discovery", person2, (data) =>
  console.log("subscriber 1", data)
);

sdkInstance.publish("discovery", "Hello");
sdkInstance.publish("discovery", "My Hello");
sdkInstance.publish("discovery", "Hey Hello");
sdkInstance.publish("discovery", "Over Hello");
sdkInstance.publish("discovery", "How Hello");

console.log("Done all publish");

sdkInstance.subscribe("discovery", person1, (data) =>
  console.log("subscriber 2", data)
);



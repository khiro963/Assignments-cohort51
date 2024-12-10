/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-4-observable

Complete the `createObservable()` function as follows:

- The `subscribe` function should take the function passed to it as an argument
   and push it onto the `subscribers` array. (Yes, you can store functions in an
   array. Functions are treated in JavaScript like any other value.

- The `notify` function should iterate through, and call, all subscribers from 
  the `subscribers` array, passing on the notification message to each 
  subscriber.
------------------------------------------------------------------------------*/

export function createObservable() {
  const subscribers = [];
  return {
    subscribe(subscriber) {
      // TODO complete this function
      subscribers.push(subscriber);
    },
    notify(message) {
      // TODO complete this function
      subscribers.forEach((subscriber) => subscriber(message));
    },
  };
}

//your JS code here. If required.
function throttle(callback, delay) {
let timeoutId;
  let lastArgs;
  let lastThis;

  function throttled(...args) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this;

    if (!timeoutId) {
      callback.apply(lastThis, lastArgs);
      timeoutId = setTimeout(() => {
        timeoutId = null;
        if (lastArgs) {
          callback.apply(lastThis, lastArgs);
          lastArgs = null;
          lastThis = null;
        }
      }, delay);
    }
  }

  throttled.cancel = function () {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastArgs = null;
    lastThis = null;
  };

  return throttled;
}

module.exports = throttle;

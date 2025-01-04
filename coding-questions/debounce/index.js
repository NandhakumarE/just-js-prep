// Implement Debounce

const debounce = (callbackFn = null, delay = 0) => {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callbackFn.apply(this, args), delay);
  };
};

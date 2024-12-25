function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
const logMessage = debounce(() => console.log('Debounced!'), 1000);
logMessage(); // Call this multiple times to see the debouncing in action

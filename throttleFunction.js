function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
const logMessageThrottle = throttle(() => console.log('Throttled!'), 2000);
setInterval(logMessageThrottle, 500); // Logs message every 2 seconds

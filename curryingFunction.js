function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...args2) {
                return curried(...args.concat(args2));
            };
        }
    };
}
const add = (a, b) => a + b;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // Output: 3

if (!Function.prototype.bind) {
    Function.prototype.bind = function(context) {
        const fn = this;
        return function(...args) {
            return fn.apply(context, args);
        };
    };
}

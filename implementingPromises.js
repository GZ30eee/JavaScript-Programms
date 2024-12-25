class MyPromise {
   constructor(executor) {
       this.onResolveCallbacks = [];
       this.onRejectCallbacks = [];
       this.status = 'pending';
       this.value;

       const resolve = value => {
           if (this.status === 'pending') {
               this.status = 'fulfilled';
               this.value = value;
               this.onResolveCallbacks.forEach(callback => callback(value));
           }
       };

       const reject = reason => {
           if (this.status === 'pending') {
               this.status = 'rejected';
               this.value = reason;
               this.onRejectCallbacks.forEach(callback => callback(reason));
           }
       };

       executor(resolve, reject);
   }

   then(onFulfilled, onRejected) {
       if (this.status === 'fulfilled') onFulfilled(this.value);
       if (this.status === 'rejected') onRejected(this.value);

       if (this.status === 'pending') {
           this.onResolveCallbacks.push(onFulfilled);
           this.onRejectCallbacks.push(onRejected);
       }
   }
}

// Example usage:
new MyPromise((resolve, reject) => resolve("Success"))
   .then(value => console.log(value)); // Output: Success

function deepClone(obj) {
     return JSON.parse(JSON.stringify(obj));
}

const originalObj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(originalObj);
console.log(clonedObj); // Output: { a: 1, b: { c: 2 } }

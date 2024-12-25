function restructureArray(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    const strings = arr.filter(item => typeof item === 'string');
    return [...numbers, ...strings];
}
console.log(restructureArray([1, 'a', 2, 'b', 3])); // Output: [1, 2, 3, 'a', 'b']

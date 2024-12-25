function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => 
      flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}
console.log(flattenArray([1,[2,[3,[4]]]])); // Output: [1,2,3,4]

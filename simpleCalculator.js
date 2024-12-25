function simpleCalculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return null;
    }
}
console.log(simpleCalculator(10, 5, 'add')); // Output: 15

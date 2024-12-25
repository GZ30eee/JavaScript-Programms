function reverseString(str) {
    try {
        return str.split('').reverse().join('');
    } catch (error) {
        console.error('Error reversing string:', error);
        return '';
    }
}
console.log(reverseString("hello")); // Output: "olleh"

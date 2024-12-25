function rotateMatrix(matrix) {
    const n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
}
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotateMatrix(matrix);
console.log(matrix); // Output: [[7,4,1],[8,5,2],[9,6,3]]

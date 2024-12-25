function addMatrices(matrixA, matrixB) {
   const resultMatrix = [];
   for (let i=0; i<matrixA.length; i++) {
       resultMatrix[i] = [];
       for (let j=0; j<matrixA[i].length; j++) {
           resultMatrix[i][j] =
               matrixA[i][j] + matrixB[i][j];
       }
   }
   return resultMatrix;
}

const matA=[[1 ,2 ,3],[4 ,5 ,6]];
const matB=[[7 ,8 ,9],[10 ,11 ,12]];
console.log(addMatrices(matA ,matB)); 
// Output :[[8 ,10 ,12],[14 ,16 ,18]]

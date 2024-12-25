function findMissingNumber(arr){
   const n=arr.length+1;
   const expectedSum=(n*(n+1))/2;

   const actualSum=arr.reduce((sum,num)=>sum+num ,0);

   return expectedSum-actualSum;
}

console.log(findMissingNumber([0 ,1 ,2 ,3])); // Output :4

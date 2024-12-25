function mergeSortedArrays(arr1 ,arr2)
{
let mergedArray=[];

while(arr1.length&&arr2.length)
{
if(arr1[0]<arr2[0]) mergedArray.push(arr1.shift());
else mergedArray.push(arr2.shift());
}

return mergedArray.concat(arr1).concat(arr2);
}

console.log(mergeSortedArrays([1 ,3 ,5] ,[2 ,4 ,6])); //Output:[1 ,2 ,3 ,4 ,5 ,6]

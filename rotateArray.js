function rotateArray(arr,k)
{
k%=arr.length;

if(k<0)
k+=arr.length;

return arr.slice(-k).concat(arr.slice(0,-k));
}

console.log(rotateArray([1 ,2 ,3 ,4] ,2)); //Output:[3 ,4 ,1 ,2]

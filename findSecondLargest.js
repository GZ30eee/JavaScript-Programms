function findSecondLargest(arr)
{
let first=-Infinity;
let second=-Infinity;

for(let num of arr)
{
if(num>first)
{
second=first;
first=num;
}
else if(num>second&&num<first)
{
second=num;
}
}

return second===-Infinity?null:second;
}

console.log(findSecondLargest([10 ,20 ,4])); //Output :10
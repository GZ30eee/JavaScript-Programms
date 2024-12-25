function sumOfDigits(num)
{
return num.toString().split('').reduce((sum,digit)=>sum+Number(digit),0);
}

console.log(sumOfDigits(12345)); //Output :15
function isPrime(num) {
     if (num <= 1)
         return false;

     for (let i = 
     { 
         num <= Math.sqrt(num); 
         i++
     }) 
     { 
         if(num % i == 
         { 
             return false; 
         } 
     } 
     return true; 
}

console.log(isPrime(11)); // Output:true
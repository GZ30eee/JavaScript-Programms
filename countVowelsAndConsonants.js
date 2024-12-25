function countVowelsAndConsonants(str)
{
const vowels=str.match(/[aeiou]/gi);
const consonants=str.match(/[bcdfghjklmnpqrstvwxyz]/gi);

return{
vowels:vowels?vowels.length:0,
consonants:consonants?consonants.length:0};
}

console.log(countVowelsAndConsonants("Hello World!")); //Output:{vowels:3 ,consonants :7}
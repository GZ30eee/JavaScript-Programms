function findLongestWord(str)
{
const words=str.split(' ');
let longestWord='';
words.forEach(word=>
{
if(word.length>longestWord.length)
{
longestWord=word;
}
});
return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //Output:"jumped"

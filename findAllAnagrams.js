function findAnagrams(words) {
   const anagramsMap = {};

   words.forEach(word => {
       const sortedWord = word.split('').sort().join('');
       if (!anagramsMap[sortedWord]) anagramsMap[sortedWord] = [];
       anagramsMap[sortedWord].push(word);
   });

   return Object.values(anagramsMap);
}

console.log(findAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

const spanishWords = require('an-array-of-spanish-words')

const wordFinder = (input, length) => {

    const filteredWords = spanishWords.filter(word => word.length === parseInt(length))

    const solutionArray = []

    for (let i = 0; i < filteredWords.length; i++) {
        const currentWord = filteredWords[i]
        var notExcluded = true
        var letterAmount = true
        for (let j = 0; j < currentWord.length; j++) {
            const currentLetter = currentWord[j]
            if (!input.includes(currentLetter)) {
                notExcluded = false
                break
            }
        }
        if (notExcluded) {
            for (let k = 0; k < currentWord.length; k++) {
                const currentLetter = currentWord[k]
                const amountInCurrentWord = currentWord.split('').filter(letter => letter === currentLetter).length
                const amountInInput = input.split('').filter(letter => letter === currentLetter).length
                if (amountInCurrentWord > amountInInput) {
                    letterAmount = false
                    break
                }
            }
            if (letterAmount) solutionArray.push(currentWord)
        }
    }

    return solutionArray
}

module.exports = wordFinder



// ChatGPT sample: 
// function findWordsWithLetters(wordList, letters, amount) {
//     const result = [];
    
//     // Create a set of the provided letters for faster lookup
//     const providedLettersSet = new Set(letters);
    
//     // Iterate through each word in the word list
//     for (const word of wordList) {
//       // Count the occurrences of each letter in the word
//       const letterCounts = {};
//       for (const letter of word) {
//         letterCounts[letter] = (letterCounts[letter] || 0) + 1;
//       }
      
//       // Check if the required letters are present in the word and in the required amount
//       let valid = true;
//       for (const letter of letters) {
//         if (!letterCounts[letter] || letterCounts[letter] < amount) {
//           valid = false;
//           break;
//         }
//       }
      
//       // Check if the word contains only provided letters
//       if (valid) {
//         for (const letter in letterCounts) {
//           if (!providedLettersSet.has(letter)) {
//             valid = false;
//             break;
//           }
//         }
//       }
      
//       if (valid) {
//         result.push(word);
//       }
//     }
    
//     return result;
//   }
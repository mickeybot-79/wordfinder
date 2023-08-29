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

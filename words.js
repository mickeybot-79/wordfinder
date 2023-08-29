const spanishWords = require('an-array-of-spanish-words')

const wordFinder = (input, length) => {
    const filteredWords = spanishWords.filter(word => word.length === parseInt(length))
    const solutionArray = []

    for (let i = 0; i < filteredWords.length; i++) {
        const currentWord = filteredWords[i]
        var valid = true
        for (let j = 0; j < currentWord.length; j++) {
            const currentLetter = currentWord[j]
            if (!input.includes(currentLetter)) {
                valid = false
                break
            } else {
                const amountInCurrentWord = currentWord.split('').filter(letter => letter === currentLetter).length
                const amountInInput = input.split('').filter(letter => letter === currentLetter).length
                if (amountInCurrentWord > amountInInput) {
                    solutionArray.push(currentWord)
                }
        }
    }
    return solutionArray
}

module.exports = wordFinder

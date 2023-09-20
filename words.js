const spanishWords = require('an-array-of-spanish-words')
const englishWords = require('an-array-of-english-words')
const frenchWords = require('an-array-of-french-words')
const portuguesWords = require('./Other/portuguese words.json')
const italianWords = require('./Other/italian words.json')

const wordFinder = (input, length, language) => {

    var selectedArray

    switch (language) {
        case 'english':
            selectedArray = englishWords
            break
        case 'spanish':
            selectedArray = spanishWords
            break
        case 'french':
            selectedArray = frenchWords
            break
        case 'portuguese':
            selectedArray = portuguesWords
            break
        default: 
            selectedArray = italianWords
            break
    }

    const filteredWords = selectedArray.filter(word => word.length === parseInt(length))

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

const submit = document.getElementById('submit')
const clear = document.getElementById('clear')
const languageLabel = document.getElementById('language-label')
const languageElem = document.getElementById('language')
languageElem.value = 'english'
const lettersElem = document.getElementById('letters')
const lengthElem = document.getElementById('length')
const lettersLabel = document.getElementById('letters-label')
const lengthLabel = document.getElementById('length-label')
const resultElem = document.getElementById('result')
var noWords = 'No words'
var oneWord = 'word found'
var manyWords = 'words found'

languageElem.addEventListener('input', (e) => {
    console.log(e.target.value)
    switch (e.target.value) {
        case 'spanish':
            languageLabel.innerHTML = 'Idioma:'
            lettersLabel.innerHTML = 'Letras:'
            lengthLabel.innerHTML = 'Cantidad:'
            submit.innerHTML = 'Enviar'
            noWords = 'No hay palabras'
            oneWord = 'palabra encontrada'
            manyWords = 'palabras encontradas'
            break
        case 'french':
            languageLabel.innerHTML = 'Langue:'
            lettersLabel.innerHTML = 'Lettres:'
            lengthLabel.innerHTML = 'Montant:'
            submit.innerHTML = 'Envoyer'
            noWords = 'Pas de mots'
            oneWord = 'mot trouvé'
            manyWords = 'mots trouvés'
            break
        case 'portuguese':
            languageLabel.innerHTML = 'Linguagem:'
            lettersLabel.innerHTML = 'Letras:'
            lengthLabel.innerHTML = 'Quantidade:'
            submit.innerHTML = 'Enviar'
            noWords = 'Nenhuma palavra encontrada'
            oneWord = 'palavra encontrada'
            manyWords = 'palavras encontradas'
            break
        case 'italian':
            languageLabel.innerHTML = 'Lingua:'
            lettersLabel.innerHTML = 'Letteras:'
            lengthLabel.innerHTML = 'Quantità:'
            submit.innerHTML = 'Inviare'
            noWords = 'Senza parole'
            oneWord = 'parola trovata'
            manyWords = 'parole trovate'
            break
        default: 
            languageLabel.innerHTML = 'Language:'
            lettersLabel.innerHTML = 'Letters:'
            lengthLabel.innerHTML = 'Length:'
            submit.innerHTML = 'Send'
            noWords = 'No words'
            oneWord = 'word found'
            manyWords = 'words found'
            break
    }
})

submit.addEventListener('click', () => {
    fetch('https://wordfinder-wyhs.onrender.com/words', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            input: lettersElem.value,
            length: lengthElem.value,
            language: languageElem.value
        })
    })
        .then(response => response.json())
        .then(response => {
            if (response.length === 0) {
                resultElem.innerHTML = `<p>${noWords}</p>`
            } else if (response.length === 1) {
                resultElem.innerHTML = `<p>1 ${oneWord}:</p><p>1. ${response[0].toUpperCase()}</p>`
            } else {
                const wordList = []
                response.forEach(word => {
                    wordList.push(`${word.toUpperCase()}\n`)
                });
                resultElem.innerHTML = `<p>${response.length} ${manyWords}:</p><p id="words">${wordList.join('<br>')}</p>`
            }
        })
})

clear.addEventListener('click', () => {
    lettersElem.value = ''
    lengthElem.value = ''
    resultElem.innerHTML = ''
})

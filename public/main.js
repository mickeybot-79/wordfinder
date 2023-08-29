const button = document.getElementById('submit')
const lettersElem = document.getElementById('letters')
const lengthElem = document.getElementById('length')
const resultElem = document.getElementById('result')

button.addEventListener('click', () => {
    fetch('https://wordfinder-wyhs.onrender.com/words', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            input: lettersElem.value,
            length: lengthElem.value
        })
    })
        .then(response => response.json())
        .then(response => {
            if (response.length === 0) {
                resultElem.innerHTML = `<p>No hay palabras</p>`
            } else if (response.length === 1) {
                resultElem.innerHTML = `<p>1 palabra encontrada:</p><p>1. ${response[0].toUpperCase()}</p>`
            } else {
                const wordList = []
                response.forEach(word => {
                    wordList.push(`${response.indexOf(word) + 1}. ${word.toUpperCase()}\n`)
                });
                resultElem.innerHTML = `<p>${response.length} palabras encontradas:</p><p id="words">${wordList.join('<br>')}</p>`
            }
        })
})

const express = require('express')
const app = express()
const cors = require('cors')
const wordFinder = require('./words')

app.use(cors())

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname})
    res.sendFile('/style.css', {root: __dirname})
    res.sendFile('/main.js', {root: __dirname})
})

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.post('/words', (req, res) => {
    const { input, length, language } = req.body
    console.log(input, length, language)
    const result = wordFinder(input.toLowerCase(), length, language)
    res.send(result)
})

const hostname = '192.168.1.10'

app.listen(8001, hostname)

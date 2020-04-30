const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('This app developed by someone else')
})

app.get('/weather', (req, res) => {
    res.send('This show the forecast information')
})

app.listen(3000, () => {
    console.log('server is upon port 3000')
})
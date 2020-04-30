const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'jagadeesh',
        nickName: 'Jaggu'
    },{
        age: 27
    }])
})

app.get('/about', (req, res) => {
    res.send('<h2>This is about page</h2>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'sunny',
        location: 'mabagam'
    })
})

app.listen(3000, () => {
    console.log('server is upon port 3000')
})
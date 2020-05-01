const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'jagadeesh'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpfulText' 
    })
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
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
   
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Andrew'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Jagadeesh'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpfulText',
        title: 'Help',
        name: 'Jagadeesh'
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
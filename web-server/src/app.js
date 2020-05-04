const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
    if (!req.query.address) {
        return res.send({
            error: 'You must enter a address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                    return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location, 
                address: req.query.address
            }) 
        }) 
    })

})

app.get('/products', (req, res) => {    
    if (!req.query.search) {
        return res.send({
            error: 'You must give a serach term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error : 404',
        name: 'Jagadeesh',
        errorMessage: 'Help article not found'
    })
}) 

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 error',
        name: 'Jagadeesh',
        errorMessage: 'URL not found' 
    })
})

app.listen(3000, () => {
    console.log('server is upon port 3000')
})
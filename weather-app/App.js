const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('NewYork', (error, data) => {
    if (error) {
        return console.log(error)
    }
    

    forecast( data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            console.log(error)
        }
        
        console.log(data.location)
        console.log(forecastData)
    })
})

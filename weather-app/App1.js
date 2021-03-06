const geocode = require('./refactored_utils/geocode')
const forecast = require('./refactored_utils/forecast')

const address = process.argv[2]
 
if (!address) {
    console.log('Please enter address')
} else {
    geocode(address, (error, data) => {
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
    
}


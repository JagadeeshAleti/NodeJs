const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=85da9ec8ae05d84156692ee070688822&query=' + longitude + ',' + latitude + '&units=f'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Check ypur internet connectivity', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Currentl we are in ' + response.body.location.name + 'and temperature is ' + response.body.current.temperature + ' by the temperature its like  ' + response.body.current.weather_descriptions[0])
       }
    })
}

module.exports = forecast
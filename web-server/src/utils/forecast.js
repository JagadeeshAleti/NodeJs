const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=85da9ec8ae05d84156692ee070688822&query=' + longitude + ',' + latitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Check ypur internet connectivity', undefined)
        } else if (body.error) {
            callback('Check URL once again', undefined)
        } else {
            callback(undefined, 'Currentl we are in ' + body.location.name + 'and temperature is ' + body.current.temperature + ' by the temperature its like  ' + body.current.weather_descriptions[0])
       }
    })
}

module.exports = forecast
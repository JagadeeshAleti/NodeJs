const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=85da9ec8ae05d84156692ee070688822&query=' + longitude + ',' + latitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Check ypur internet connectivity', undefined)
        } else if (body.error) {
            callback('Check URL once again', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " +   body.current.humidity + "%")
       }
    })
}

module.exports = forecast
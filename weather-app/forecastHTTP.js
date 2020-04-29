const request =  require('request')

const url = 'http://api.weatherstack.com/current?access_key=85da9ec8ae05d84156692ee070688822&query=37.8267,-122.4233&units=f'

// simply converting the string into object use lowwer json only
request( { url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Check your connectivity')
    } else if(response.body.error) {
        console.log('Check the URL')
    } else {
        console.log(response.body.current)  
        console.log(response.body.request)   // only print about request
        console.log(response.body.location)  // only prints about the location      
        console.log(response.body.current.weather_descriptions[0] + ', we are in ' + response.body.location.country + ' present temperature is ' + response.body.current.temperature)
    }
})  
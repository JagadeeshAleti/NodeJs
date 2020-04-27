const request =  require('request')

const url = 'http://api.weatherstack.com/current?access_key=85da9ec8ae05d84156692ee070688822&query=37.8267,-122.4233'

// url  ==== { url: url} 
request( url, (error, response) => {
    //console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})  
const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFnYWRlZXNoYWxldGkiLCJhIjoiY2s5aWpmdGc1MGw3ZjNrcTZiNjlycmNyeCJ9.Z0axN71OO-NZS3rbXh0rog&limit=1'

request({ url: url, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Latitude : ' + latitude)
    console.log('Longitude: ' + longitude)
})
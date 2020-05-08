const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamFnYWRlZXNoYWxldGkiLCJhIjoiY2s5aWpmdGc1MGw3ZjNrcTZiNjlycmNyeCJ9.Z0axN71OO-NZS3rbXh0rog&limit=1'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to internet', undefined)
        } else if (body.features.length === 0) {
            callback('Enter an valid address', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
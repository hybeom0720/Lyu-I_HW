const request = require('request')
const url = require('../config')

const geocode = (address, semi_url,callback) =>{
    const semi_url2 = semi_url.mapfronturl + encodeURI(address) + semi_url.mapbackurl
    // const semi_url = url.mapfronturl+encodeURIComponent(address)+url.mapbackurl
    request({url:semi_url2, json:true}, (error, response)=>{
        if (error){
            callback('Uable to connect to location services')
        } else if (response.body.features ===0) {
            callback('Uanble to find location, Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

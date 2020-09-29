const request = require('postman-request')
const url = require('./config')
const geocode = require('./util/geocode')

//when we try to find the error, we should get th specific url

request({ url: url.weatherurl, json: true}, (error, response)=>{
    // console.log(response.body.current)
    //console.log(error)
    //console.log(response.body.error) -> We can express this method.
    console.log('It is currently ' + response.body.current.temperature+'\
    degrees out. There is a '+ response.body.current.feelslike+'\
    % chance of rain')
    console.log(response.body.current.weather_descriptions[0])
})


// request({url:url.mapurl, json: true}), (error, reponse)=>{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)

// })


geocode('Philadelphia',url, (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})
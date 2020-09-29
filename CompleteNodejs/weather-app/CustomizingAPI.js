const request = require('postman-request')
const url = require('./config')

request({ url: url.weatherurl, json: true}, (error, response)=>{
    // console.log(response.body.current)
    console.log('It is currently ' + response.body.current.temperature+'\
    degrees out. There is a '+ response.body.current.feelslike+'\
    % chance of rain')
    console.log(response.body.current.weather_descriptions[0])
})


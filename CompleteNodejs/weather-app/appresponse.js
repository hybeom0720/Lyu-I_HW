const request = require('postman-request')
const url = require('./config')

request({ url: url.weatherurl}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})


const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
//O CORS é utilizado para a API ser consumida por outra fotne, por exemplo o backend (API)
//Ser consumida pelo frontend
const allowCors = require('./cors')
const queryParser = require('express-query-int') //na query de requisição, vai converter string para numerico

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server

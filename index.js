// 1. Require Express

const path = require('path')
const express = require('express')

const server = express()
const port = 3000

server.listen(port, () => {
    console.log('Server is listening to port', port)
})

// 2. Set routes

server.get('/', (req, res) => {
    const filename = path.join(__dirname, '/public/index.html')
    res.sendFile(filename)
})

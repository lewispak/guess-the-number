// 1. Require Express

const express = require('express')

const server = express()
const port = 3000

server.get('/', (req, res) => {
    res.send('Cool, eh?!')
})

server.listen(port, () => {
    console.log('Server is listening to port', port)
})

// 2. Set route

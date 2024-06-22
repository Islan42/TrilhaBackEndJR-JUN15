const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.end('Hello There!')
})

app.listen(PORT, function() {
    console.log(`Rodando em: http://localhost:${PORT}`)
})
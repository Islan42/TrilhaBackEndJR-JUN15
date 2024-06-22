const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

const tarefasRouter = require('./api/routes/tarefas')

app.use('/tarefas', tarefasRouter)

app.get('/', function (req, res) {
    res.redirect('/tarefas')
})

app.listen(PORT, function() {
    console.log(`Rodando em: http://localhost:${PORT}`)
})
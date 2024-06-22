const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

//PRE ROUTING MIDDLEWARES

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With', 'Content-Type', 'Accept', 'Authorization')
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE')
        res.status(200)
        return res.json({})
    }
    next()
})

//ROUTES

const tarefasRouter = require('./api/routes/tarefas')

app.use('/tarefas', tarefasRouter)

app.get('/', function (req, res) {
    res.redirect('/tarefas')
})

//POS ROUTING MIDDLEWARES

app.use(function (req, res, next) {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use(function (error, req, res, next) {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message,
            status: error.status
        }
    })
})

// SERVER ;)

app.listen(PORT, function() {
    console.log(`Rodando em: http://localhost:${PORT}`)
})
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.status(200)
    res.json({
        message: 'Lista de Tarefas'
    })
})

router.post('/', function (req, res) {
    res.status(201)
    res.json({
        message: 'Criar nova tarefa'
    })
})

router.patch('/:id', function (req, res) {
    id = req.params.id

    res.status(200)
    res.json({
        message: 'Atualizar tarefa',
        id: id
    })
})

router.delete('/:id', function (req, res) {
    id = req.params.id
    
    res.status(200)
    res.json({
        message: 'Deletar tarefa',
        id: id
    })
})

module.exports = router
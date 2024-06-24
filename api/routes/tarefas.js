const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    req.db('tarefa').select('*').then(function (rows) {
        res.status(200)
        res.json({
            message: 'Lista de Tarefas',
            tarefas: rows
        })
    })
})

router.post('/', function (req, res, next) {
    const nome = req.body.nome
    const descricao = req.body.descricao || ""
    const finalizada = req.body.finalizada

    req.db('tarefa').insert({nome, descricao, finalizada}, ['id', 'nome', 'descricao', 'finalizada'])
    .then(function (result) {
        res.status(201)
        res.json({
            message: 'Criar nova tarefa',
            tarefa: result[0]
        })
    })
    .catch(function(err) {
        next(err)
    })
})

router.get('/:id', function (req, res, next) {
    id = req.params.id

    req.db('tarefa').select('*').where('id', id).then(function (result) {
        if (result.length > 0) {
            res.status(200)
            res.json({
                message: 'Detalhar tarefa',
                tarefa: result[0]
            })
        } else {
            next()
        }
    })

})

router.patch('/:id', function (req, res) {
    id = req.params.id

    let updatedObject = {}

    req.body.forEach(element => {
        updatedObject[element.col] = element.newValue    
    });

    // Verificar se não há tentativa de alterar o id )<

    req.db('tarefa').where('id', id).update(updatedObject, ['id', 'nome', 'descricao', 'finalizada']).then(function(result){
        res.status(200)
        res.json({
            message: 'Atualizar tarefa',
            tarefa: result[0]
        })
    })
})

router.delete('/:id', function (req, res) {
    id = req.params.id

    req.db('tarefa').where('id', id).del().then(function (result) {
        res.status(200)
        res.json({
            message: 'Deletar tarefa',
            id: id
        })
    })
})

module.exports = router
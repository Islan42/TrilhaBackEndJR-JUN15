const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
    req.db('tarefa').select('*')
    .then(function (rows) {
        res.status(200)
        res.json({
            tarefas: rows
        })
    })
    .catch(function (error) {
        next(error)
    })
})

router.post('/', async function (req, res, next) {
    try {
        const nome = req.body.nome
        const descricao = req.body.descricao || ""  //A descrição pode ser nula, mas em vez disso prefiro transformá-la numa string vazia
        const finalizada = req.body.finalizada
        
        if (finalizada !== 0 && finalizada !== 1) {
            const error = new Error('400: A coluna `finalizada` deve ser 0 (false) ou 1 (true).')
            error.status = 400
            throw error
        }

        const result = await req.db('tarefa').insert({nome, descricao, finalizada}, ['id', 'nome', 'descricao', 'finalizada'])
        
        res.status(201)
        res.json({
            tarefa: result[0]
        })

    } catch (error) {
        next(error)
    }
})

router.get('/:id', function (req, res, next) {
    id = req.params.id

    req.db('tarefa').select('*').where('id', id)
    .then(function (result) {
        if (result.length > 0) {
            res.status(200)
            res.json({
                tarefa: result[0]
            })
        } else {
            next()  //LANÇA UM 404
        }
    })
    .catch(function (error) {
        next(error)
    })
})

router.patch('/:id', async function (req, res, next) {
    // OBS: QUANDO USAR TRY CATCH USAR TAMBÉM ASYNC, POIS ESSE BLOCO NAO FUNCIONA BEM COM O MODELO .THEN().CATCH(), POIS A FUNÇÃO DEIXA O BLOCO TC ANTES DA PROMISSE FINALIZAR .THEN().CATCH()
    try {
        id = req.params.id
    
        let updatedObject = {}
    
        req.body.forEach(element => {
            updatedObject[element.col] = element.newValue    
        });

        if (Object.hasOwn(updatedObject, 'id')){
            const error = new Error('400: Você não deve tentar alterar o id (6º Mandamento).')
            error.status = 400
            throw error
        }
       
        const result = await req.db('tarefa').where('id', id).update(updatedObject, ['id', 'nome', 'descricao', 'finalizada'])
        
        res.status(200)
        res.json({
            tarefa: result[0]
        })
        
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', function (req, res, next) {
    id = req.params.id

    req.db('tarefa').where('id', id).del()
    .then(function (result) {
        res.status(200)
        res.json({
            message: '200: Tarefa apagada com sucesso.',
        })
    })
    .catch(function (error) {
        next(error)
    })
})

module.exports = router
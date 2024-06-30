function getAll(req, res, next) {
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
}

async function createOne(req, res, next) {
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
}

function getOne(req, res, next) {
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

}

async function updateOne(req, res, next) {
    // OBS: QUANDO USAR TRY CATCH USAR TAMBÉM ASYNC, POIS ESSE BLOCO NAO FUNCIONA BEM COM O MODELO .THEN().CATCH(), POIS A FUNÇÃO DEIXA O BLOCO TC ANTES DA PROMISSE FINALIZAR .THEN().CATCH()
    try {
        id = req.params.id

        const tarefa = await req.db('tarefa').select('*').where('id', id)  
        if (tarefa.length === 0) {
            const error = new Error('404: Tarefa não encontrada')
            error.status = 404
            throw error
        }
    
        let updatedObject = {}
    
        req.body.forEach(element => {
            updatedObject[element.col] = element.newValue    
        });

        if (updatedObject.hasOwnProperty('id')){
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
}

async function deleteOne(req, res, next) {
    try {
        id = req.params.id
        // MELHORAR PARA INDICAR AO USUÁRIO QUANDO ELE TENTAR DELETAR UMA TAREFA QUE NÃO EXISTE MAIS
        // TALVEZ ISTO SEJA UMA FALHA DE SEGURANÇA ?
        const tarefa = await req.db('tarefa').select('*').where('id', id)  
        if (tarefa.length === 0) {
            const error = new Error('404: Tarefa não encontrada')
            error.status = 404
            throw error
        }

        await req.db('tarefa').del().where('id', id)

        res.status(200)
        res.json({
            message: '200: Tarefa apagada com sucesso.',
        })
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne
}
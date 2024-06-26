const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/signup', async function (req, res, next) {
    try {
        const username = req.body.username
        const password = await bcrypt.hash(req.body.password, 10)

        const result = await req.db('user').insert({username, password}, ['username', 'password'])

        res.status(201)
        res.json({
            user: result[0]
        })
    } catch (error) {
        next(error)
    }
})

router.post('/login', async function (req, res, next) {
    try {
        const username = req.body.username
        const givenPassword = req.body.password

        const user = await req.db('user').select('*').where('username', username)

        if (user.length < 1) {
            const err = new Error('401: Falha na Autenticação.')
            err.status = 401
            throw err
        }

        const match = await bcrypt.compare(givenPassword, user[0].password)

        if (match === false) {
            const err = new Error('401: Falha na Autenticação.')
            err.status = 401
            throw err
        }

        res.status(200)
        res.json({
            user
        })
    } catch (error) {
        next(error)
    }
})

router.delete('/:userID', async function (req, res, next) {
    try {
        const userID = req.params.userID
        await req.db('user').where('id', userID).del()

        res.status(200)
        res.json({
            message: '200: Usuário apagado com sucesso.'
        })
    } catch (error) {
        next(error)
    }
})

// SECRET FUNCTION
router.get('/', async function (req, res, next) {
    try {
        const result = await req.db('user').select('*')

        res.status(200)
        res.json({
            usuarios: result
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router
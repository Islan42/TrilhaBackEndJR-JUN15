const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_KEY || 'DEVELOPMENT'

async function singUp(req, res, next) {
    try {
        const username = req.body.username

        const user = await req.db('user').select('*').where('username', username)

        if (user.length !== 0) {
            const err = new Error('400: Usuário já cadastrado.')
            err.status = 400
            throw err
        }

        const password = await bcrypt.hash(req.body.password, 10)

        const result = await req.db('user').insert({username, password}, ['id', 'username'])

        res.status(201)
        res.json({
            user: result[0]
        })
    } catch (error) {
        next(error)
    }
}

async function logIn(req, res, next) {
    try {
        const username = req.body.username
        const givenPassword = req.body.password

        const user = await req.db('user').select('*').where('username', username)

        if (user.length === 0) {
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

        const token = jwt.sign(
            {
                id: user[0].id,
                username: user[0].username
            },
            jwtKey, 
            {
                expiresIn: '1h'
            }
        )

        res.status(200)
        res.json({
            token
        })
    } catch (error) {
        next(error)
    }
}

async function deleteUser(req, res, next) {
    try {
        const userID = req.params.userID

        const usuario = await req.db('user').select('*').where('id', userID)
        if (usuario.length === 0) {
            const error = new Error('404: Usuário não encontrado.')
            error.status = 404
            throw error
        }

        await req.db('user').where('id', userID).del()

        res.status(200)
        res.json({
            message: '200: Usuário apagado com sucesso.'
        })
    } catch (error) {
        next(error)
    }
}

async function getAllUsers(req, res, next) {
    try {
        const result = await req.db('user').select('*')

        res.status(200)
        res.json({
            usuarios: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    singUp,
    logIn,
    deleteUser,
    getAllUsers
}
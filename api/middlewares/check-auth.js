const jwt = require('jsonwebtoken')
const jwtKey = process.env.JWT_KEY || 'DEVELOPMENT'

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, jwtKey)
        req.userData = decoded;
        next()
    } catch {
        const error = new Error('401: Falha na Autenticação.')
        error.status = 401
        next(error)
    }
}
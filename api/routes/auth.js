const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/auth')

router.post('/signup', AuthController.singUp)

router.post('/login', AuthController.logIn)

router.delete('/:userID', AuthController.deleteUser)

// SECRET ROUTE
router.get('/', AuthController.getAllUsers)

module.exports = router
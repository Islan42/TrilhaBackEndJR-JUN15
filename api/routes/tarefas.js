const express = require('express')
const router = express.Router()

const checkAuth = require('../middlewares/check-auth')
const TarefasController = require('../controllers/tarefas')

router.get('/', TarefasController.getAll)

router.post('/', checkAuth, TarefasController.createOne)

router.get('/:id', TarefasController.getOne)

router.patch('/:id', checkAuth, TarefasController.updateOne)

router.delete('/:id', checkAuth, TarefasController.deleteOne)

module.exports = router

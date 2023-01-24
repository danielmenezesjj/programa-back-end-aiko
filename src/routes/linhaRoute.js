const {Router} = require('express')
const LinhaController = require('../controllers/LinhaController')

const router = Router();

router.get('/linhas', LinhaController.listLinhasAll)
router.get('/linhas/:id', LinhaController.listLinhaOne)
router.post('/linhas', LinhaController.createLinha)
router.put('/linhas/:id', LinhaController.updateLinha)
router.delete('/linhas/:id', LinhaController.deleteLinha)

module.exports = router
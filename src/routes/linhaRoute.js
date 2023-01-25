const {Router} = require('express')
const LinhaController = require('../controllers/LinhaController')
const router = Router();


router.get('/linhas', LinhaController.listLinhaAll)
router.get('/linhas/:id', LinhaController.listaLinhasOne)
router.get('/linhas/:id/paradas', LinhaController.pegaLinhaP)
router.post('/linhas', LinhaController.createLinhas)
router.put('/linhas/:id', LinhaController.updateLinhas)
router.delete('/linhas/:id', LinhaController.deleteLinhas)


module.exports = router
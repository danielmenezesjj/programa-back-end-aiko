const {Router} = require('express')
const PosicaoVeiculoController = require('../controllers/PosicaoVeiculoController')

const router = Router()


router.get('/posicaoVeiculos', PosicaoVeiculoController.listPosicaoVeiculoAll)
router.get('/posicaoVeiculos/:id', PosicaoVeiculoController.listaPosicaoVeiculoOne)
router.post('/posicaoVeiculos', PosicaoVeiculoController.createPosicaoVeiculo)
router.post('/posicaoVeiculos/:id/restaura', PosicaoVeiculoController.restaurePosicaoVeiculo)
router.put('/posicaoVeiculos/:id', PosicaoVeiculoController.updatePosicaoVeiculo)
router.delete('/posicaoVeiculos/:id', PosicaoVeiculoController.deletePosicaoVeiculo)


module.exports = router
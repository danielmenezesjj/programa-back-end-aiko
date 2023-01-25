const {Router} = require('express')
const PosicaoVeiculoController = require('../controllers/PosicaoVeiculo')

const router = Router()


router.get('/posicaoVeiculos', PosicaoVeiculoController.listPosicaoVeiculoAll)
router.get('/posicaoVeiculos/:id', PosicaoVeiculoController.listaPosicaoVeiculoOne)
router.post('/posicaoVeiculos', PosicaoVeiculoController.createPosicaoVeiculo)
router.put('/posicaoVeiculos/:id', PosicaoVeiculoController.updatePosicaoVeiculo)
router.delete('/posicaoVeiculos/:id', PosicaoVeiculoController.deletePosicaoVeiculo)


module.exports = router
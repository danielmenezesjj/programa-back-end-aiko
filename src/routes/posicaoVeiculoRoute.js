const {Router} = require('express')
const PosicaoVeiculoController = require('../controllers/PosicaoVeiculoController')


const router = Router()

router.get('/posicaoVeiculoRoute', PosicaoVeiculoController.listPosicaoVeiculosAll)
router.get('/posicaoVeiculoRoute/:id', PosicaoVeiculoController.listUmaPosicaoVeiculo)
router.post('/posicaoVeiculoRoute', PosicaoVeiculoController.createPosicaoVeiculo)

module.exports = router;
const {Router} = require('express')
const VeiculoController = require('../controllers/VeiculoController')

const router = Router()

router.get('/veiculos', VeiculoController.listVeiculosAll)
router.get('/veiculos/:id', VeiculoController.listaVeiculosOne)
router.get('/veiculos/:id/linhas', VeiculoController.veiculosPorLinhas)
router.post('/veiculos', VeiculoController.createVeiculos)
router.post('/veiculos/:id/restaura', VeiculoController.restauraVeiculo)
router.put('/veiculos/:id', VeiculoController.updateVeiculos)
router.delete('/veiculos/:id', VeiculoController.deleteVeiculos)


module.exports = router
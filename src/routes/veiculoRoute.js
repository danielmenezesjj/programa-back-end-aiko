const {Router} = require('express')
const VeiculoController = require("../controllers/VeiculoController.js")

const router = Router();


router.get('/veiculos', VeiculoController.listVeiculosAll)
router.get('/veiculos/:id', VeiculoController.listOneVeiculo)
router.post('/veiculos', VeiculoController.createVeiculo)
router.put('/veiculos/:id', VeiculoController.updateVeiculo)
router.delete('/veiculos/:id', VeiculoController.deleteVeiculo)

module.exports = router
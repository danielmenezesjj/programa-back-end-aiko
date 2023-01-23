const {Router} = require('express')
const VeiculoController = require("../controllers/VeiculoController.js")

const router = Router();


router.get('/veiculos', VeiculoController.listVeiculosAll)

module.exports = router
const {Rotuer, Router} = require('express')
const ParadaController = require('../controllers/ParadaController')

const router = Router()


router.get('/paradas', ParadaController.listParadaAll)
router.get('/paradas/:id', ParadaController.listaParadaOne)
router.post('/paradas', ParadaController.createParada)
router.put('/paradas/:id', ParadaController.updateParada)
router.delete('/paradas/:id', ParadaController.deleteParada)


module.exports = router;
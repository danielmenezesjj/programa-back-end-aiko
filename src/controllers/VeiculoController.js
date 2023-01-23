const database = require('../models')


class VeiculoController{
    static async listVeiculosAll(req, res){
        try {
            const listVeiculos = await database.Veiculo.findAll();
            return res.status(200).json(listVeiculos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = VeiculoController
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

    static async listOneVeiculo(req, res){
        const {id} = req.params
        try {
            const listOneVec = await database.Veiculo.findOne({where: {id: Number(id)}})
            return res.status(200).json(listOneVec)

        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async createVeiculo(req, res){
        const newInfos = req.body;
        try {
            const criarVeiculo = await database.Veiculo.create(newInfos)
            return res.status(201).json(criarVeiculo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateVeiculo(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.Veiculo.update(newInfos, {where: {id: Number(id)}})
            const veiculoatt = await database.Veiculo.findOne({where: {id: Number(id)}})
            return res.status(200).json(veiculoatt)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async deleteVeiculo(req, res){
        const {id} = req.params
        try {
            const deleteVeic = await database.Veiculo.destroy({where: {id: Number(id)}})
            return res.status(200).json(`O veiculo do id: ${id} foi deletado com sucesso!`)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
}

module.exports = VeiculoController
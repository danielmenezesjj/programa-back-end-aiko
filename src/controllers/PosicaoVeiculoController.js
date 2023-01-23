const database = require('../models')

class PosicaoVeiculoController{

    static async listPosicaoVeiculosAll(req, res){
        try {
            const listaPosicaoVeiculosAll = await database.PosicaoVeiculo.findAll();
            return res.status(200).json(listaPosicaoVeiculosAll)
        } catch (error) {
            return res.status(500).json(error.message) 
        }
        }
    
    static async listUmaPosicaoVeiculo(req, res){
        const {id} = req.params
        try {
            const listaUmaPosicao = await database.PosicaoVeiculo.findOne({where: {id: Number(id)}})
            return res.status(200).json(listaUmaPosicao)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }

    static async createPosicaoVeiculo(req, res){
        const infos = req.body;
        try {
            const createPosicao = await database.PosicaoVeiculo.create(infos)
            return res.status(201).json(createPosicao)
        } catch (error) {
           return res.status(500).json(error.message) 
        }
    }

    static async updatePosicaoVeiculo(req, res){
        const {id} = req.params
        const newInfos = req.body

        try {
            await database.PosicaoVeiculo.update(newInfos, {where: {id: Number(id)}})
            const updatePosic = await database.PosicaoVeiculo.findOne({where: {id: Number(id)}})
            return res.status(200).json(updatePosic)
        } catch (error) {
            return res.statu(404).json(error.message)
        }
    }

    static async deletePosicaoVeiculo(req, res){
        const {id} = req.params
        try {
            const deletePosic = await database.PosicaoVeiculo.destroy({where: {id: Number(id)}})
            return res.status(200).json(`A posição do id: ${id} foi deletada com sucesso!`)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }

}


module.exports = PosicaoVeiculoController
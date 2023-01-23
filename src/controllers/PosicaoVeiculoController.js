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

}


module.exports = PosicaoVeiculoController
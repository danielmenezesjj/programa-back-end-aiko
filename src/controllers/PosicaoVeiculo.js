const database = require('../models')


class PosicaoVeiculoController{

    static async listPosicaoVeiculoAll(req, res) {
        try {
          const listaAll = await database.PosicaoVeiculo.findAll();
          return res.status(200).json(listaAll);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
      static async listaPosicaoVeiculoOne(req, res){
        const {id} = req.params
        try {
            const listOnePosicaoVeiculo = await database.PosicaoVeiculo.findOne({where: {id: Number(id)}})
            return res.status(200).json(listOnePosicaoVeiculo)
        } catch (error) {
            return res.status(404).json(error.message)
        }
      }
      static async createPosicaoVeiculo(req, res){
        const newPosicaoVeiculo = req.body
        try {
            const PosicaoVeiculoNew = await database.PosicaoVeiculo.create(newPosicaoVeiculo)
             return res.status(201).json(PosicaoVeiculoNew)
    
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
      }
      static async updatePosicaoVeiculo(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.PosicaoVeiculo.update(newInfos, {where: {id: Number(id)}})
            const PosicaoVeiculoUpdate = await database.PosicaoVeiculo.findOne({where: {id: Number(id)}})
            return res.status(200).json(PosicaoVeiculoUpdate)
        } catch (error) {
            return res.status(404).json(error.message)
        }
      }
      static async deletePosicaoVeiculo(req, res){
        const {id} = req.params
            const PosicaoVeiculoDelete = await database.PosicaoVeiculo.destroy({where: {id: Number(id)}})
            if(PosicaoVeiculoDelete != 0){
              return res.status(200).json(`A PosicaoVeiculo de onibus do id: ${id} foi deletada com sucesso!`)
            }else{
              return res.status(404).json(`A PosicaoVeiculo de id: ${id} não foi encontrada`)
            }
            
      } 

}



module.exports = PosicaoVeiculoController
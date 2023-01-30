const {PosicaoVeiculoServices} = require('../services')
const ServicesPosicaoVeiculo = new PosicaoVeiculoServices()


class PosicaoVeiculoController{

    static async listPosicaoVeiculoAll(req, res) {
        try {
          const listaAll = await ServicesPosicaoVeiculo.pegaTodosOsRegistros();
          return res.status(200).json(listaAll);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
      static async listaPosicaoVeiculoOne(req, res){
        const {id} = req.params
        try {
            const listOnePosicaoVeiculo = await ServicesPosicaoVeiculo.pegaUmRegistro(Number(id))
            return res.status(200).json(listOnePosicaoVeiculo)
        } catch (error) {
            return res.status(404).json(error.message)
        }
      }
      static async createPosicaoVeiculo(req, res){
        const newPosicaoVeiculo = req.body
        try {
            const PosicaoVeiculoNew = await ServicesPosicaoVeiculo.criaRegistro(newPosicaoVeiculo)
             return res.status(201).json(PosicaoVeiculoNew)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
      }
      static async updatePosicaoVeiculo(req, res){
        const {id} = req.params
        const newInfos = req.body
            const verfSeExist = await ServicesPosicaoVeiculo.pegaUmRegistro(Number(id))
            if(verfSeExist != null){
              await ServicesPosicaoVeiculo.atualizaRegistros(newInfos, Number(id))
              return res.status(200).json(`id: ${id} atualizado com sucesso`)
            }
            return res.status(404).json(`o id: ${id} não existe`)
      }
      
      static async deletePosicaoVeiculo(req, res){
        const {id} = req.params
        const verfSeExist = await ServicesPosicaoVeiculo.pegaUmRegistro(Number(id))
        if(verfSeExist != null){
          await ServicesPosicaoVeiculo.apagaRegistros(Number(id))
          return res.status(200).json(`O id: ${id} foi deletado com sucesso!`)
        }
        return res.status(500).json(`O id: ${id} não foi encontrado`)
      }
      
      static async restaurePosicaoVeiculo(req, res){
        const {id} = req.params
        try {
          await ServicesPosicaoVeiculo.restauraRegistro(Number(id))
          return res.status(200).json(`id: ${id} restaurado com sucesso!`)
        } catch (error) {
          return res.status(404).json(`id: ${id} Não foi encontrado`)
        }
      }

}



module.exports = PosicaoVeiculoController
const database = require('../models')

class VeiculoController{

    static async listVeiculosAll(req, res){
        try {
        const listAll = await database.Veiculos.findAll();
        return res.status(200).json(listAll)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    } 
    static async listaVeiculosOne(req, res){
        const {id} = req.params
        try {
            const listOneVeiculos = await database.Veiculos.findOne({where: {id: Number(id)}})
            return res.status(200).json(listOneVeiculos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createVeiculos(req, res){
        const newVeiculos = req.body
        try {
            const VeiculosNew = await database.Veiculos.create(newVeiculos)
            return res.status(201).json(VeiculosNew)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
    }
    static async updateVeiculos(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.Veiculos.update(newInfos, {where: {id: Number(id)}})
            const VeiculosUpdate = await database.Veiculos.findOne({where: {id: Number(id)}})
            return res.status(200).json(VeiculosUpdate)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
    static async deleteVeiculos(req, res){
        const {id} = req.params
     
            const VeiculosDelete = await database.Veiculos.destroy({where: {id: Number(id)}})
            if(VeiculosDelete != 0){
                return res.status(200).json(`A Veiculos de onibus do id: ${id} foi deletada com sucesso!`)
            }else{
                return res.status(404).json(`A Linha de id: ${id} não foi encontrada`)
            }
       
            
    
    }

}

module.exports = VeiculoController
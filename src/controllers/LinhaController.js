const database = require('../models')

class LinhaController{
    
    static async listLinhaAll(req, res){
        try {
        const listAll = await database.Linhas.findAll();
        return res.status(200).json(listAll)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    } 
    static async listaLinhasOne(req, res){
        const {id} = req.params
        try {
            const listOneLinhas = await database.Linhas.findOne({where: {id: Number(id)}})
            return res.status(200).json(listOneLinhas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createLinhas(req, res){
        const newLinhas = req.body
        try {
            const LinhasNew = await database.Linhas.create(newLinhas)
            return res.status(201).json(LinhasNew)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
    }
    static async updateLinhas(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.Linhas.update(newInfos, {where: {id: Number(id)}})
            const LinhasUpdate = await database.Linhas.findOne({where: {id: Number(id)}})
            return res.status(200).json(LinhasUpdate)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
    static async deleteLinhas(req, res){
        const {id} = req.params
     
            const LinhasDelete = await database.Linhas.destroy({where: {id: Number(id)}})
            if(LinhasDelete != 0){
                return res.status(200).json(`A Linhas de onibus do id: ${id} foi deletada com sucesso!`)
            }else{
                return res.status(404).json(`A Linha de id: ${id} não foi encontrada`)
            }
    }
      static async pegaLinhaP(req, res){
        const {id} = req.params
        try {
         const linha = await database.Linhas.findOne({where: {id: Number(id)}})
         const paradas = await linha.getTesteLinhas()
         return res.status(200).json(paradas)
        } catch (error) {
        return res.status(404).json(error.message)
        }
     }

}
module.exports = LinhaController
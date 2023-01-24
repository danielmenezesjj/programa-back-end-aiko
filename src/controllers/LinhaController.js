const database = require('../models')

class LinhaController{
   
    static  async listLinhasAll(req, res){
        try {
        const listLinhas = await database.Linha.findAll()
        return res.status(200).json(listLinhas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
       }

    static async listLinhaOne(req, res){
        const {id} = req.params

        try {
            const listOne = await database.Linha.findOne({where: {id: Number(id)}})
            return res.status(200).json(listOne)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createLinha(req, res){
        const linhaCreate = req.body
        try {
            const newLinha = await database.Linha.create(linhaCreate)
            return res.status(201).json(newLinha)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateLinha(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.Linha.update(newInfos, {where: {id: Number(id)}})
            const LinhaUpdate = await database.Linha.findOne({where: {id: Number(id)}})
            return res.status(200).json(LinhaUpdate)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async deleteLinha(req, res){
        const {id} = req.params
        try {
            await database.Linha.destroy({where: {id: Number(id)}})
            return res.status(200).json(`A linha do id ${id} foi deletada com sucesso!`)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

}


module.exports = LinhaController
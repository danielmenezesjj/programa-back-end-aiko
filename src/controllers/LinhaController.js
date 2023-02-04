const {LinhaServices, ParadaServices} = require('../services')
const ServiceParada = new ParadaServices()
const ServicesLinha = new LinhaServices()


class LinhaController{
    
    static async listLinhaAll(req, res){
        try {
        const listAll = await ServicesLinha.pegaTodosOsRegistros();
        return res.status(200).json(listAll)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    } 
    static async listaLinhasOne(req, res){
        const {id} = req.params
        try {
            const listOneLinhas = await ServicesLinha.pegaUmRegistro(Number(id))
            return res.status(200).json(listOneLinhas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createLinhas(req, res){
        const newLinha = req.body
        try {
            if(Object.keys(newLinha).length === 0){
                throw new Error('corpo da requisicao vazio')
            }
            const LinhasNew = await ServicesLinha.criaRegistro(newLinha)
            return res.status(201).json(LinhasNew)
            
        } catch (error) {
            if(error.message === 'corpo da requisicao vazio'){
            return res.status(400).json(error.message)
            }
            return res.status(500).json(error.message)
        }
    }

    static async updateLinhas(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            const LinhasNew = await ServicesLinha.atualizaRegistros(newInfos, Number(id))
            return res.status(204).json(LinhasNew)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
    static async deleteLinhas(req, res){
        const {id} = req.params
        try {
            const getLinhas = await ServicesLinha.pegaUmRegistro(Number(id))
            if(getLinhas === null){
                throw new Error('Id não localizado')
            }
            const LinhasDelete = await ServicesLinha.apagaRegistros(Number(id))
            return res.status(200).json(`O id: ${id} foi deletado com sucesso!`)
        } catch (error) {
            if(error.message === 'Id não localizado'){
                return res.status(404).json(`O id: ${id} não foi localizado na nossa base`)
            }
            return res.status(500).json(error.message)
        } 
    }

    static async restoreLinhas(req, res){
        const {id} = req.params
        try {
            const restoreLinha = await ServicesLinha.restauraRegistro(Number(id))
            return res.status(200).json(`O id: ${id} foi restaurado com sucesso!`)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaLinhaPorParada(req, res){
        const {id} = req.params
        try {
        const LinhasPorParada = await ServiceParada.pegaLinhaP({id: Number(id)})
         return res.status(200).json(LinhasPorParada)
        } catch (error) {
        return res.status(404).json(error.message)
        }
    }



}
module.exports = LinhaController
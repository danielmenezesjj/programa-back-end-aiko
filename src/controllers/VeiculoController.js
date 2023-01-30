const database = require('../models')
const {VeiculoServices, LinhaServices} = require('../services')
const ServicesVeiculos = new VeiculoServices()
const SerivcesLinhas = new LinhaServices()

class VeiculoController{

    static async listVeiculosAll(req, res){
        try {
        const listAll = await ServicesVeiculos.pegaTodosOsRegistros();
        return res.status(200).json(listAll)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    } 
    static async listaVeiculosOne(req, res){
        const {id} = req.params
        try {
            const listOneVeiculos = await ServicesVeiculos.pegaUmRegistro(Number(id))
            return res.status(200).json(listOneVeiculos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createVeiculos(req, res){
        const newVeiculos = req.body
        try {
            const VeiculosNew = await ServicesVeiculos.criaRegistro(newVeiculos)
            return res.status(201).json(VeiculosNew)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateVeiculos(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await ServicesVeiculos.atualizaRegistros(newInfos, Number(id))
            return res.status(200).json(`id ${id} atualizado com sucesso!`)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
    static async deleteVeiculos(req, res){
        const {id} = req.params
        const verfVeiculo = await ServicesVeiculos.pegaUmRegistro(Number(id))
        if(verfVeiculo != null){
            await ServicesVeiculos.apagaRegistros(Number(id))
            return res.status(200).json(`id: ${id} Deletado com sucesso!`)
        }
        return res.status(404).json(`id: ${id} Não encontrado`)
    }

    static async veiculosPorLinhas(req, res){
        const {id} = req.params
        try {
            const LinhasVeiculos = await SerivcesLinhas.veiculosPorLinhas(Number(id))
            return res.status(200).json(LinhasVeiculos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraVeiculo(req, res){
        const {id} = req.params
        try {
            await ServicesVeiculos.restauraRegistro(Number(id))
            return res.status(200).json(`Veiculo de id: ${id} restaurado com sucesso!`)
        } catch (error) {
            return res.status(404).json(`Veiculo de id: ${id} Não encontrado`) 
        }
    }
}

module.exports = VeiculoController
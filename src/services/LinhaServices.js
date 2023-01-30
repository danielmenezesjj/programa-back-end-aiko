const Services = require('./Services')
const database = require('../models')
class LinhasServices extends Services{
    constructor(){
        super('Linhas')
    }
    async veiculosPorLinhas(where = {}){
        const LinhasVeiculos = await database[this.nomeDoModelo].findOne({where: {...where}})
        return LinhasVeiculos.getParadas()
    }

}


module.exports = LinhasServices
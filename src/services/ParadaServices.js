const Services = require('./Services')
const database = require('../models')

class ParadasServices extends Services{
    constructor(){
        super('Parada')
    }
    async pegaLinhaP(where = {}){
        const OndePara = await database[this.nomeDoModelo].findOne({where: {...where}})
        return OndePara.getLinhaPorParada()
    }
}


module.exports = ParadasServices
const database = require('../models')


class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }
    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(where = {}){
        return database[this.nomeDoModelo].findOne({where: {id: where}})
    }

    async criaRegistro(dados){
        return database[this.nomeDoModelo].create(dados)
    }
    async atualizaRegistros(dadosAtualizados, where = {}){
        return database[this.nomeDoModelo].update(dadosAtualizados, {where: {id: where}})
    }
    async apagaRegistros(id){
        return database[this.nomeDoModelo].destroy({where: {id: id}})
    }

    async restauraRegistro(id){
        return database[this.nomeDoModelo].restore({where: {id: id}})
    }

}



module.exports = Services
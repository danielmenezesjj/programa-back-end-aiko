const database = require("../models");

class ParadaController {
  static async listParadaAll(req, res) {
    try {
      const listaAll = await database.Parada.findAll();
      return res.status(200).json(listaAll);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async listaParadaOne(req, res){
    const {id} = req.paramas
    try {
        const listOneParada = await database.Parada.findOne({where: {id: Number(id)}})
        return res.status(200).json(listOneParada)
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }
  static async createParada(req, res){
    const newParada = req.body
    try {
        const paradaNew = database.Parada.create(newParada)
        return res.status(201).json(paradaNew)
    } catch (error) {
        return res.status(500).json(error.message)
    }

  }
  static async updateParada(req, res){
    const {id} = req.params
    const newInfos = req.body
    try {
        await database.Parada.update(newInfos, {where: {id: Number(id)}})
        const paradaUpdate = database.Parada.findOne({where: {id: Number(id)}})
        return res.status(200).json(paradaUpdate)
    } catch (error) {
        return res.status(404).json(error.message)
    }
  }
  static async deleteParada(req, res){
    const {id} = req.params
    try {
        const paradaDelete = await database.Parada.destroy({where: {id: Number(id)}})
        return res.status(200).json(`A parada de onibus do id: ${id} foi deletada com sucesso!`)
    } catch (error) {
        return res.status(404).json(error.message)
    }
  }

}

module.exports = ParadaController;

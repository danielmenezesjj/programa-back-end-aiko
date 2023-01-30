'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {

    static associate(models) {
      Veiculos.belongsTo(models.Linhas,{
        foreignKey: 'Linha_id'
      })
    }
  }
  Veiculos.init({
    name: DataTypes.STRING,
    modelo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculos',
    paranoid: true
  });
  return Veiculos;
};
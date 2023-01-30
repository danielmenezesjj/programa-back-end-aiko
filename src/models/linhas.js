'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Linhas extends Model {
 
    static associate(models) {
    
      Linhas.hasMany(models.Veiculos, {
        foreignKey: 'Linha_id',
        as: 'Paradas'
      })

      Linhas.belongsTo(models.Parada, {
        foreignKey: 'Parada_id'
      })
    }
  }
  Linhas.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Linhas',
    paranoid: true
  });
  return Linhas;
};
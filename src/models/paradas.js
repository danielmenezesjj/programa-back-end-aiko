'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paradas extends Model {


    static associate(models) {
      Paradas.hasMany(models.Linhas, {
        foreignKey: 'Parada_id',
        as: 'LinhaPorParada'
      })
    }
  }
  Paradas.init({
    name: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Parada',
  });
  return Paradas;
};
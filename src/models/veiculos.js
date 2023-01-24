'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Veiculos.hasMany(models.Linhas,{
        foreignKey: 'Linha_id'
      })
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
  });
  return Veiculos;
};
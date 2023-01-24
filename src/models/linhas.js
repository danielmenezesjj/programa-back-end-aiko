'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Linhas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Linhas.hasMany(models.Parada, {
        foreignKey: 'Parada_id'
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
  });
  return Linhas;
};
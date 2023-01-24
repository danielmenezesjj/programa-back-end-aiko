'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PosicaoVeiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PosicaoVeiculo.hasMany(models.Veiculos, {
        foreignKey: 'Veiculo_id'
      })
      PosicaoVeiculo.belongsTo(models.Veiculos, {
        foreignKey: 'Veiculo_id'
      })
    }
  }
  PosicaoVeiculo.init({
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'PosicaoVeiculo',
  });
  return PosicaoVeiculo;
};